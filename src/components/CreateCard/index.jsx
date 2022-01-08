import { Stack, Button, InputRightAddon } from "@chakra-ui/react";
import React, { useState } from "react";
import PreviewCard from "../PreviewCard";
import ServiceCard from "../ServiceCard";
import { GetData } from "../../helpers/helpers";

const CreateCard = ({ showPassword, setShowPassword, SetCards }) => {
  const { addNewDocument, getDatafirebase } = GetData();
  const [values, setValues] = useState({});
  const { service } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // uploadDataFirebase(values);
    addNewDocument(service, values);
    setValues({});
    getDatafirebase().then((res) => SetCards(res.docs));
  };

  return (
    <Stack direction="row" fontFamily="Inter" paddingTop="3rem" spacing={8} alignItems="center">
      <ServiceCard handleChange={handleChange} handleSubmit={handleSubmit} setShowPassword={setShowPassword} showPassword={showPassword} values={values} />
      <PreviewCard values={values} showPassword={showPassword} />
      <Button height="50px" width="200px" variant="outline" color="#ffff" _hover={{ color: "gray.200" }} borderRadius="full" onClick={handleSubmit}>
        Create new
      </Button>
    </Stack>
  );
};

export default CreateCard;
