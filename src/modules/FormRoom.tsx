import React, { ReactElement } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
  Textarea
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  status: string;
  description?: string;
  price: number;
  maxCapacity: number;
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

function FormRoom({ isOpen, onClose }: IProps): ReactElement {
  const { t } = useTranslation();
  const { register, formState, handleSubmit } = useForm<FormData>();
  const { errors, isSubmitting } = formState;

  const onSubmit = (values: FormData) => {
    console.log(values);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!errors?.name}>
              <FormLabel htmlFor="name">{t("NAME")}</FormLabel>
              <Input
                name="name"
                placeholder={t("NAME")}
                ref={register({
                  required: "THIS_FIELD_IS_REQUIRED"
                })}
              />
              <FormErrorMessage>
                {t(errors?.name?.message || "")}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.description}>
              <FormLabel htmlFor="description">{t("DESCRIPTION")}</FormLabel>
              <Textarea
                name="description"
                placeholder={t("DESCRIPTION")}
                ref={register}
              />
              <FormErrorMessage>
                {t(errors?.description?.message || "")}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.status}>
              <FormLabel htmlFor="status">{t("STATUS")}</FormLabel>
              <Select
                name="status"
                defaultValue="INACTIVE"
                ref={register({
                  required: "THIS_FIELD_IS_REQUIRED"
                })}
              >
                <option value="INACTIVE">{t("INACTIVE")}</option>
                <option value="ACTIVE">{t("ACTIVE")}</option>
                <option value="FOR_RENT">{t("FOR_RENT")}</option>
              </Select>
              <FormErrorMessage>
                {t(errors?.status?.message || "")}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.price}>
              <FormLabel htmlFor="price">{t("PRICE")}</FormLabel>
              <NumberInput>
                <NumberInputField
                  name="price"
                  placeholder={t("PRICE")}
                  ref={register({
                    required: "THIS_FIELD_IS_REQUIRED"
                  })}
                />
              </NumberInput>
              <FormErrorMessage>
                {t(errors?.price?.message || "")}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              isLoading={isSubmitting}
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit(onSubmit)}
            >
              {t("SAVE")}
            </Button>
            <Button variant="ghost" onClick={onClose}>
              {t("CANCEL")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}

export default FormRoom;
