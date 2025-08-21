import { useState } from "react";
import { TableBody, TableCell, TableRow } from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { formatterValue, formatterDate } from "@/utils/Formatters";

import { toast } from "sonner";

import { tagColors } from "@/utils/Colors";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import PopConfirm from "@/Components/PopConfirm";

const transactions = [
  {
    id: 1,
    transaction: "recive",
    description: "Salário NPU",
    tag: {
      tag_description: "Salário",
      color: "blue",
    },
    date: "2025-01-01",
    necessary: true,
    value: 8415.0,
  },
  {
    id: 2,
    transaction: "payment",
    description: "teste",
    tag: {
      tag_description: "Salário",
      color: "purple",
    },
    date: "2025-01-01",
    necessary: true,
    value: 8415.0,
  },
  {
    id: 3,
    transaction: "payment",
    description: "teste 1",
    tag: {
      tag_description: "Salário",
      color: "green",
    },
    date: "2025-01-01",
    necessary: false,
    value: 8415.0,
  },
  {
    id: 4,
    transaction: "payment",
    description: "teste 2",
    tag: {
      tag_description: "Salário",
      color: "red",
    },
    date: "2025-01-01",
    necessary: true,
    value: 8415.0,
  },
];

const TransactionBody = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openExcludeModal, setOpenExcludeModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const editModal = (id: number) => {
    console.log("Modal de edição clicado, ID: " + id);
    setOpenEditModal(true);
    console.log("openEditModal" + openEditModal);
  };

  const excludeModal = (id: number, name: string) => {
    setSelectedItem({ id, name });
    setOpenExcludeModal(true);
  };

  const handleDelete = () => {
    if (selectedItem) {
      toast.success("Item excluído com sucesso!", {
        description: `"${selectedItem.name}" foi removido permanentemente.`,
        duration: 3000,
      });
      setOpenExcludeModal(false);
    }
  };
  return (
    <>
      <TableBody>
        {transactions.map((expanse) => (
          <TableRow key={expanse.description}>
            <TableCell className="w-[200px]">{expanse.description}</TableCell>
            <TableCell className="w-[150px] text-center">
              <span
                className={`px-3 py-1 rounded-full ${tagColors[expanse.tag.color] || "bg-gray-500 text-white"}`}
              >
                {expanse.tag.tag_description}
              </span>
            </TableCell>
            <TableCell className="w-[120px] text-center">
              {formatterDate(expanse.date)}
            </TableCell>
            <TableCell className="w-[100px] text-center">
              {expanse.necessary === true ? (
                <span className="text-green-700">
                  <FaCheck size={20} />
                </span>
              ) : (
                <span className="text-red-800">
                  <IoClose size={22} />
                </span>
              )}
            </TableCell>
            <TableCell className="w-[120px] text-left">
              {formatterValue(expanse.value)}
            </TableCell>
            <TableCell className="w-[50px] p-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    aria-label="Opções da transação"
                  >
                    <FiMoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuItem onClick={() => editModal(expanse.id)}>
                    <FaEdit className="text-accent-foreground mr-2 h-4 w-4" />{" "}
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      excludeModal(expanse.id, expanse.description)
                    }
                  >
                    <FaTrash className="text-accent-foreground mr-2 h-4 w-4" />{" "}
                    Deletar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <PopConfirm
        title={`Tem certeza que deseja excluir o item ${selectedItem?.name}?`}
        contextText="Esta ação não pode ser desfeita. Isso excluirá permanentemente o item selecionado."
        openModal={openExcludeModal}
        setOpenModal={setOpenExcludeModal}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default TransactionBody;
