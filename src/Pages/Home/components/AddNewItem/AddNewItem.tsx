"use client";

import { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { tagColors } from "@/utils/Colors";

const AddNewItem = () => {
  const [isDespesa, setIsDespesa] = useState(true);
  const [useTag, setUseTag] = useState(true);
  const [selectedTag, setSelectedTag] = useState("Salário");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [date, setDate] = useState("2025-01-01");
  const [necessario, setNecessario] = useState(false);

  return (
    <DialogContent className="bg-gray-950 text-white w-[700px] rounded-lg p-6">
      <DialogHeader>
        <DialogTitle className="text-lg font-bold mb-4">
          Adicione a sua transação
        </DialogTitle>
      </DialogHeader>

      <div className="flex items-center gap-4 mb-4">
        <label className="flex items-center gap-2 ">
          <input
            type="radio"
            checked={isDespesa}
            onChange={() => setIsDespesa(true)}
          />
          Despesa
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={!isDespesa}
            onChange={() => setIsDespesa(false)}
          />
          Receita
        </label>
      </div>

      <div className="mb-4">
        <Label className="mb-2">Descrição</Label>
        <Input
          placeholder="Digite a descrição"
          className=" bg-transparent border-b border-white rounded-2 focus:ring-0 focus:border-white"
        />
      </div>

      <div className="mb-4">
        <Label className="mb-2">TAG</Label>
        <div className="flex justify-between items-center gap-2 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!useTag}
              onChange={() => setUseTag(!useTag)}
            />
            Não utilizar tag
          </label>

          <select
            value={selectedTag}
            disabled={!useTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="bg-transparent border-b border-white text-white px-2 py-1 disabled:opacity-50"
          >
            <option>Salário</option>
            <option>Aluguel</option>
            <option>Transporte</option>
          </select>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {Object.keys(tagColors).map((color) => (
            <button
              key={color}
              disabled={!useTag}
              className={`w-6 h-6 rounded-full ${
                tagColors[color].split(" ")[0]
              } border-2 ${
                selectedColor === color ? "border-white" : "border-black"
              }`}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <Label className="mb-2">Data</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent border-b border-white rounded-2 focus:ring-0 focus:border-white"
          />
        </div>

        <div>
          <Label className="mb-2">Gasto necessário</Label>
          <div className="flex items-center gap-2">
            <label>
              <input
                type="radio"
                checked={necessario}
                onChange={() => setNecessario(true)}
              />{" "}
              Sim
            </label>
            <label>
              <input
                type="radio"
                checked={!necessario}
                onChange={() => setNecessario(false)}
              />{" "}
              Não
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <Label className="mb-2">Valor</Label>
        <Input
          placeholder="Digite o valor"
          className="bg-transparent border-b border-white rounded-2 focus:ring-0 focus:border-white"
        />
      </div>

      <DialogFooter className="flex justify-end gap-2">
        <DialogClose asChild>
          <Button className="text-gray-700 cursor-pointer" variant="outline">
            Cancelar
          </Button>
        </DialogClose>
        <Button className="cursor-pointer">Salvar</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddNewItem;
