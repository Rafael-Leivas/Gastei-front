import { Button } from "@/Components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/Components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/Components/ui/alert-dialog";

import { tagColors } from "@/utils/Colors";
import { formatterValue, formatterDate } from "@/utils/Formatters";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

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

const TransactionTable = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openExcludeModal, setOpenExcludeModal] = useState(false);

  const totalTable = transactions.reduce(
    (sum, transaction) => sum + transaction.value,
    0
  );

  const editModal = (id: number) => {
    console.log("Modal de edição clicado, ID: " + id);
    setOpenEditModal(true);
    console.log("openEditModal" + openEditModal);
  };

  const excludeModal = (id: number) => {
    console.log("Modal de Exclusão clicado, ID: " + id);
    setOpenExcludeModal(true);
  };

  return (
    <>
      <div className=" bg-accent border-2 rounded-2xl p-8">
        <Table>
          <TableCaption>Planilha financeira</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Descrição</TableHead>
              <TableHead className="w-[150px] text-center">Tag</TableHead>
              <TableHead className="w-[120px] text-center">Data</TableHead>
              <TableHead className="w-[100px]">Necessário</TableHead>
              <TableHead className="w-[120px] text-left">Valor</TableHead>
              <TableHead className="w-[50px]"></TableHead>{" "}
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((expanse) => (
              <TableRow key={expanse.description}>
                <TableCell className="w-[200px]">
                  {expanse.description}
                </TableCell>
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
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <FiMoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-32">
                      <DropdownMenuItem onClick={() => editModal(expanse.id)}>
                        <FaEdit className="text-accent-foreground mr-2 h-4 w-4" />{" "}
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => excludeModal(expanse.id)}
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
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="w-[120px] text-left">
                {formatterValue(totalTable)}
              </TableCell>
              <TableCell className="w-[50px]"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <AlertDialog open={openExcludeModal} onOpenChange={setOpenExcludeModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Isso excluirá permanentemente o
                item selecionado.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction>Confirmar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default TransactionTable;
