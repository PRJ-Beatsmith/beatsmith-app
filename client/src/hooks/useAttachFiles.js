// import { useState, useCallback } from "react";
// import { uuid_v4 } from "utils/uuid_v4";

// export const useAttachFiles = (ref) => {
//   const [files, setFiles] = useState([]);

//   const persistFiles = useCallback((files) => {
//     const newFilesState = files.slice(0, 5).map((f) => ({
//       id: uuid_v4(),
//       fileName: f.name,
//       uploadedAt: new Date().toISOString(),
//       fileSize: f.size,
//       fileExtension: f.type.split("/").pop(),
//     }));

//     setFiles(newFilesState);
//   });

//   const handleAttachOnChange = useCallback(() => {
//     const _files = Array.from(ref.current.files);

//     persistFiles(_files);
//   }, [ref]);

//   const handleAttachOnDrop = useCallback((acceptedFiles) => {
//     const _files = Array.from(acceptedFiles);

//     persistFiles(_files);
//   }, []);

//   const handleRemoveFile = useCallback(
//     ({ currentTarget: { id } }) => {
//       setInnerState(files.filter(({ id: _id }) => _id !== id));
//     },
//     [files],
//   );

//   const handleAttachClick = useCallback(() => {
//     fileRef.current.click();
//   }, [fileRef]);

//   return { files, handleAttachOnChange, handleAttachOnDrop, handleRemoveFile };
// };
