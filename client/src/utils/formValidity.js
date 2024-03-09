export const checkValidity = (value, rules, errors) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  errors.splice(0, errors.length);

  if (
    rules.required &&
    !(value instanceof Array
      ? value.length > 0
        ? true
        : false
      : isBoolean(value)
        ? true
        : value
          ? value instanceof File
            ? value.size > 0
            : value instanceof String
              ? value.trim() !== ""
              : true
          : false)
  ) {
    isValid = false;
    errors.push({ type: "required" });
    return isValid;
  }

  if (rules.minLength && value && !(value.length >= rules.minLength)) {
    isValid = false;
    errors.push({ type: "minLength", minLength: rules.minLength });
  }

  if (rules.maxLength && value && !(value.length <= rules.maxLength)) {
    isValid = false;
    errors.push({ type: "maxLength", maxLength: rules.maxLength });
  }

  if (rules.minValue && !(value >= rules.minValue)) {
    isValid = false;
    errors.push({ type: "minValue", minValue: rules.minValue });
  }

  if (rules.maxValue && !(value <= rules.maxValue)) {
    isValid = false;
    errors.push({ type: "maxValue", maxValue: rules.maxValue });
  }

  if (rules.isEmail && !isEmail(value)) {
    isValid = false;
    errors.push({ type: "isEmail" });
  }

  if (rules.isNumeric && !isNumeric(value)) {
    isValid = false;
    errors.push({ type: "isNumeric" });
  }

  if (rules.isDate && !isDate(value)) {
    isValid = false;
    errors.push({ type: "isDate" });
  }

  return isValid;
};

const isEmail = (value) => {
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return pattern.test(value);
};

const isNumeric = (value) => {
  const pattern = /^\d+$/;
  return pattern.test(value);
};

const isDate = (value) => {
  return new Date(value) !== "Invalid Date" && !isNaN(new Date(value));
};

const isBoolean = (value) => {
  return value === false || value === true;
};

export const checkDependencyRule = (formDefinition, formData) => {
  for (let i = 0; i < formDefinition.controls.length; i++) {
    let isDependencyValid = true;

    if (
      formDefinition.controls[i].rule &&
      formDefinition.controls[i].rule.dependencyType === "AND"
    ) {
      isDependencyValid = formDefinition.controls[
        i
      ].rule.dependencyConditions.every((dependencyCondition) => {
        switch (dependencyCondition.condition) {
          case "equalTo":
            return (
              formData[dependencyCondition.key] ===
              formData[dependencyCondition.conditionKey]
            );
          case "lessThan": {
            let isCompareValid =
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.key,
              ) <
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.conditionKey,
              );
            if (!isCompareValid) {
              formDefinition.controls[i].errors.push({
                type: "message",
                message: dependencyCondition.errorMessage,
              });
            }
            return isCompareValid;
          }
          case "greaterThan": {
            let isCompareValid =
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.key,
              ) >
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.conditionKey,
              );
            if (!isCompareValid) {
              formDefinition.controls[i].errors.push({
                type: "message",
                message: dependencyCondition.errorMessage,
              });
            }
            return isCompareValid;
          }
          case "lessThanEqualTo": {
            let isCompareValid =
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.key,
              ) <=
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.conditionKey,
              );
            if (!isCompareValid) {
              formDefinition.controls[i].errors.push({
                type: "message",
                message: dependencyCondition.errorMessage,
              });
            }
            return isCompareValid;
          }
          case "greaterThanEqualTo": {
            let isCompareValid =
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.key,
              ) >=
              getValueAccordingToType(
                formDefinition,
                formData,
                dependencyCondition.conditionKey,
              );
            if (!isCompareValid) {
              formDefinition.controls[i].errors.push({
                type: "message",
                message: dependencyCondition.errorMessage,
              });
            }
            return isCompareValid;
          }
          default:
            return true;
        }
      });
    }

    if (
      formDefinition.controls[i].rule &&
      formDefinition.controls[i].rule.effect === "VALID"
    ) {
      formDefinition.controls[i].valid = isDependencyValid;
    }

    if (
      formDefinition.controls[i].rule &&
      formDefinition.controls[i].rule.effect === "SHOW"
    ) {
      formDefinition.controls[i].show = isDependencyValid;
    }
  }

  return formDefinition;
};

const getValueAccordingToType = (formDefinition, formData, key) => {
  const control = formDefinition.controls.find(
    (control) => control.key === key,
  );

  if (control.type === "date") {
    return new Date(formData[key]);
  }
  return formData[key];
};
