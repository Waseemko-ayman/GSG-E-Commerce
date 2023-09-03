"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { StyledSupliersForm } from "./style";
import { StyledFlex } from "@/style/common";

export const formSchema = Yup.object({
  item: Yup.string().required("Item name is required !"),
  details: Yup.string().required("Some Details is required !"),

  quantity: Yup.number().positive().integer().required("Quantity is requied !"),
});

const RequestSuppliersForm = () => {
  const onSubmit = async (data) => {
    // signup(data);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledSupliersForm>
      <h4>Send quote to suppliers</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input_box">
          <Input
            type="text"
            placeholder="What item you need?"
            name="item"
            register={register}
            imageHidden
          />
          {errors.item && <p className="error">{errors.item.message}</p>}
        </div>

        <div className="input_box">
          <Input
            type="textarea"
            placeholder="Type more details"
            name="details"
            register={register}
            imageHidden
          />
          {errors.details && <p className="error">{errors.details.message}</p>}
        </div>

        <StyledFlex gap="8px">
          <div className="input_box">
            <Input
              type="number"
              placeholder="Quantity"
              imageHidden
              removeArrow
              name="quantity"
              register={register}
            />
            {errors.quantity && (
              <p className="error">{errors.quantity.message}</p>
            )}
          </div>
          <select>
            <option value="1">Pcs</option>
            <option value="2">Pcs</option>
            <option value="3">Pcs</option>
            <option value="4">Pcs</option>
          </select>
        </StyledFlex>
        <Button
          text="Send inquiry"
          type="submit"
          color="secondary"
          variant="primary"
          padding="10px"
          imageHidden
        />
      </form>
    </StyledSupliersForm>
  );
};

export default RequestSuppliersForm;
