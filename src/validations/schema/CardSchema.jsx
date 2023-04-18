import * as Yup from "yup";

const FlashCardSchema = Yup.object().shape({
  groupid: Yup.string(),
  groupname: Yup.string()
    .max(15, "Must be less than 15 characters")
    .min(4, "Group Name Must be More Than 4 Characters")
    .required("Please , Enter Group Name !"),
  groupdescription: Yup.string().max(
    200,
    " Group Description Must be less than 200 characters"
  ),

  groupimg: Yup.mixed(),

  cards: Yup.array().of(
    Yup.object().shape({
      cardid: Yup.string(),
      cardname: Yup.string()
        .max(15, "Must be less than 15 characters")
        .min(5, "Group Name Must be More Than 5 Characters")
        .required(" Input Required !"),

      carddescription: Yup.string()
        .min(15, "Must be more than 15 characters")
        .max(200, " Must be less than 200 characters")
        .required(" Input Required"),
    })
  ),
});

export default FlashCardSchema;
// In this Schema file we decelare the YUP validation for the createflashcard page
// input boxes
