import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
  Box,
  Typography,
  FormGroup,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { submitSignUp } from "actions/authActions";
import CheckboxInput from "components/atoms/inputs/CheckboxInput";
import FormButton from "components/atoms/Buttons/formButton";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "30px 40px",
  },
  textBox: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  text1: {
    fontFamily: "Noto Sans",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "133%",
  },
  text2: {
    color: "#636B74",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "142%",
  },
  text3: {
    color: "#E94057",
    fontFamily: "Open Sans",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    textDecoration: "none",
    paddingLeft: "5px",
  },
  form: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "50px",
  },
  topItems: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  divider: {
    padding: "16px 0",
  },
  dividerLine: {
    display: "flex",
    width: "350px",
    height: "1px",
    backgroundColor: "#636B74",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  bottomItems: {},
  procceedSignUp: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    marginTop: "53px",
  },
});

const StepThree = ({ onNext, onOpenModal, onCloseModal }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validateSchema = Yup.object().shape({});

  const submitHandler = (values) => {
    dispatch(submitSignUp(values));
  };

  const renderTextWithLinks = (text) => {
    const parts = text.split(/(\{link[12]:.*?\})/).filter((part) => part);
    return parts.map((part, index) => {
      if (part.startsWith("{link1:")) {
        return (
          <Fragment key={index}>
            {" "}
            <span
              onClick={() => onOpenModal(t("Auth.Register.Step3.Terms"))}
              className={classes.text3}
            >
              {t("Auth.Register.Step3.Terms")}
            </span>
          </Fragment>
        );
      } else if (part.startsWith("{link2:")) {
        return (
          <Fragment key={index}>
            {" "}
            <span
              onClick={() =>
                onOpenModal(t("Auth.Register.Step3.Policy"), "hello")
              }
              className={classes.text3}
            >
              {t("Auth.Register.Step3.Policy")}
            </span>
          </Fragment>
        );
      } else {
        return <Fragment key={index}>{part}</Fragment>;
      }
    });
  };

  return (
    <Formik
      initialValues={{
        termsOfUse: false,
        privacyPolicy: false,
        agePolicy: false,
      }}
      validateOnChange={true}
      validationSchema={validateSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          onNext(values);
          submitHandler(values);
        } catch (error) {
          toast.error(t("Auth.Validate.ErrorSignUp"));
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, setFieldValue, isValid, values }) => (
        <>
          {isSubmitting && <CircularProgress style={{ margin: "auto" }} />}
          <Box className={classes.root}>
            <Form>
              <Box className={classes.textBox}>
                <Typography variant="h4" className={classes.text1}>
                  {t("Auth.Register.Step3.Legal")}
                </Typography>
                <Typography variant="h4" className={classes.text2}>
                  {t("Auth.Register.Step3.MustAgree")}
                </Typography>
              </Box>
              <Box className={classes.form}>
                <Box className={classes.topItems}>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      component={CheckboxInput}
                      type="checkbox"
                      name="termsOfUse"
                      id="termsOfUse"
                      checked={values.termsOfUse}
                      onChange={(event) =>
                        setFieldValue("termsOfUse", event.target.checked)
                      }
                      variant="body2"
                      defaultChecked={values.termsOfUse}
                      label={renderTextWithLinks(
                        t("Auth.Register.Step3.TermsOfService"),
                      )}
                      autoComplete="termsOfUse"
                    />
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      component={CheckboxInput}
                      type="checkbox"
                      name="privacyPolicy"
                      id="privacyPolicy"
                      checked={values.privacyPolicy}
                      onChange={(event) =>
                        setFieldValue("privacyPolicy", event.target.checked)
                      }
                      variant="body2"
                      defaultChecked={values.privacyPolicy}
                      label={renderTextWithLinks(
                        t("Auth.Register.Step3.PrivacyPolicy"),
                      )}
                      autoComplete="privacyPolicy"
                    />
                  </FormGroup>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      component={CheckboxInput}
                      type="checkbox"
                      name="agePolicy"
                      id="agePolicy"
                      checked={values.agePolicy}
                      onChange={(event) =>
                        setFieldValue("agePolicy", event.target.checked)
                      }
                      defaultChecked={values.agePolicy}
                      variant="body2"
                      label={t("Auth.Register.Step3.AgePolicy")}
                      autoComplete="agePolicy"
                    />
                  </FormGroup>
                </Box>
                <Box className={classes.divider}>
                  <Divider className={classes.dividerLine} />
                </Box>
                <Box className={classes.bottomItems}>
                  <FormGroup className={classes.formGroup}>
                    <Field
                      component={CheckboxInput}
                      type="checkbox"
                      name="allAgreementsAccepted"
                      variant="body2"
                      onChange={({ target }) => {
                        if (target.checked) {
                          setFieldValue("agePolicy", true);
                          setFieldValue("privacyPolicy", true);
                          setFieldValue("termsOfUse", true);
                        } else {
                          setFieldValue("agePolicy", false);
                          setFieldValue("privacyPolicy", false);
                          setFieldValue("termsOfUse", false);
                        }
                      }}
                      checked={
                        values.agePolicy &&
                        values.privacyPolicy &&
                        values.termsOfUse
                      }
                      defaultChecked={
                        values.agePolicy &&
                        values.privacyPolicy &&
                        values.termsOfUse
                      }
                      label={t("Auth.Register.Step3.AllAgree")}
                      autoComplete="allAgreementsAccepted"
                    />
                  </FormGroup>
                </Box>
              </Box>
              <Box className={classes.procceedSignUp}>
                <FormButton
                  disabled={isSubmitting || !isValid || !dirty}
                  variant="primary"
                  type="submit"
                  label={t("Auth.Register.Step3.proceed")}
                />
              </Box>
            </Form>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default StepThree;
