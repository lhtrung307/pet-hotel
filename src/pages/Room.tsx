import React, { ReactElement, useMemo } from "react";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import FormRoom from "modules/FormRoom";
import * as faker from "faker";
import { generateArrayObj } from "utils/generateData";
import CustomTable from "components/table/CustomTable";
import { IColumn, IRoom } from "types";
import { RoomStatus } from "enums";

function Room(): ReactElement {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const rooms = useMemo(
    () =>
      generateArrayObj<IRoom>(10, () => ({
        name: faker.name.firstName(),
        status: faker.random.arrayElement(Object.values(RoomStatus)),
        price: faker.random.number(),
        maxCapacity: faker.random.number(5)
      })),
    []
  );

  const columns: IColumn<IRoom>[] = useMemo(
    () => [
      {
        name: "NAME",
        value: "name"
      },
      {
        name: "STATUS",
        value: "status",
        cell: function renderRoomStatus(item): ReactElement {
          let badgeColor = "";
          switch (item.status) {
            case RoomStatus.ACTIVE:
              badgeColor = "green";
              break;
            case RoomStatus.INACTIVE:
              badgeColor = "gray";
              break;
            case RoomStatus.FOR_RENT:
              badgeColor = "yellow";
              break;
          }
          return <Badge colorScheme={badgeColor}>{item.status}</Badge>;
        }
      },
      {
        name: "PRICE",
        value: "price",
        isNumeric: true
      },
      {
        name: "ACTION",
        value: "name",
        isNumeric: true,
        cell: function roomActions(item): ReactElement {
          return (
            <>
              <IconButton
                title="EDIT"
                colorScheme="gray"
                aria-label="Edit room"
                variant="outline"
                icon={<EditIcon />}
                mr={2}
              />
              <IconButton
                title="DELETE"
                colorScheme="red"
                aria-label="Delete room"
                variant="outline"
                icon={<DeleteIcon />}
              />
            </>
          );
        }
      }
    ],
    []
  );

  return (
    <div>
      <Text fontWeight="bold" fontSize="1.125rem" mt={10}>
        {t("ROOM_MANAGEMENT")}
      </Text>
      <Box
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        mt={5}
      >
        <Button colorScheme="blue" onClick={onOpen}>
          {t("ADD_NEW_ROOM")}
        </Button>
        <InputGroup maxWidth="250px">
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
          <Input type="text" placeholder={t("SEARCH_ROOM")} />
        </InputGroup>
      </Box>
      <CustomTable<IRoom> columns={columns} data={rooms} />
      <FormRoom isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default Room;
