import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "../../assets/css/carritoCompras.css";

import useProductos from "../../hooks/useProductos";
import Navbar from "../../components/Navbar";

import Alerta from "../../components/Alerta";
import { ProductosProvider } from "../../context/ProductosProvider";
import { DataContext } from "../../context/DataProvider";
import Producto from "./Producto";

const CarritoCompras = () => {
  const { register, handleSubmit } = useForm();
  const { submitProducto, guardado } = useProductos();

  const onSubmit = (datos) => {

    //e.preventDefault(); 

    const formData = new FormData();
    formData.append("image", datos.file[0]);
    formData.append("nombre", datos.nombre);
    formData.append("description", datos.description);
    formData.append("precio", datos.precio);
    formData.append("stock", datos.stock);

    submitProducto(formData);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tu Producto ha sido guardado.",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const provider = useContext(DataContext);
  const { productos } = useProductos();
  console.log(productos)
  return (
    <>
      <Navbar texto="Productos" ruta="" />
      <div className=" w-full justify-center h-5/6 items-center mt-24">
        {guardado && <Navigate to="/productos" />}
        <div className="w-full">
          <h1 className="font-bold text-6xl uppercase text-center w-full mx-auto">
            TU <span className="text-sky-700">CARRITO:</span>
          </h1>
          <div className="container">
            <table className="content-table">
              <thead>
                <tr>
                  <th>#</th>

                  <th>Nombre Articulo</th>

                  <th>Precio</th>

                  <th>Cantidad</th>

                  <th>Producto</th>
                </tr>
              </thead>
              <tbody>
                {
                  productos.map((producto)=> {

                    return <tr>
                              <td></td>
                              <td>{producto.nombre}</td>
                              <td>{producto.precio}</td>
                              <td>1</td>
                              <td><img className="tamaño-img" src={producto.image.url} alt="" /></td>


                            </tr>
                  })



                }


                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarritoCompras;
