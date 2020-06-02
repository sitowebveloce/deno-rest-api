import ebooks from "./ebooks.ts";
import { Ebook } from "../types.ts";

// Get all ebooks
const getEbooks = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: ebooks,
  };
  response.status = 200;
};
// Get single ebook
const getEbook = (
  { params, response }: { params: { id: string }; response: any },
) => {
  let id = params.id;
  // console.log(id);
  const ebook: Ebook | undefined = ebooks.find((ebk) => ebk.id === id);
  if (ebook) {
    // Response 200
    response.status = 200;
    response.body = {
      success: true,
      data: ebook,
    };
  } else {
    // Response 200
    response.status = 404;
    response.body = {
      success: false,
      data: {},
    };
  }
};
// Add all ebooks
const addEbook = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  let ebook = await body.value;
  //console.log(ebook, request.body());

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "Not found.",
      data: {},
    };
  } else {
    // Push the new ebook inside the array
    ebooks.push(ebook);
    // console.log(ebooks)
    // Response 200
    response.status = 201;
    response.body = {
      success: true,
      data: ebook,
    };
  }
};

// Update single ebook
const updateEbook = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  let id = params.id;
  //console.log(id);
  const ebook: Ebook | undefined = ebooks.find((ebk) => ebk.id === id);
  // console.log(ebook);
  if (ebook) {
    // Grasp the update data
    const body = await request.body();
    // Grasp value
    const updatedData: {
      id?: string;
      author?: string;
      title?: string;
    } = body.value;
    //console.log(updatedData);
    // Update data
    let newArray = ebooks.map((ebk) =>
      ebk.id === id ? { ...ebk, ...updatedData } : ebk
    );
    // Set new array
    ebooks.length = 0;
    ebooks.push(...newArray);
    // Response 200
    response.status = 200;
    response.body = {
      success: true,
      data: ebooks,
    };
  } else {
    // Response 200
    response.status = 404;
    response.body = {
      success: false,
      message: "Not found.",
      data: {},
    };
  }
};

// Delete ebooks
const deleteEbook = (
  { params, response }: { params: { id: string }; response: any },
) => {
  let id = params.id;
  //console.log(Id);
  let newArray = ebooks.filter((ebk) => ebk.id !== id);
  // Set new array
  ebooks.length = 0;
  ebooks.push(...newArray);
  // Response 200
  response.status = 200;
  response.body = {
    success: true,
    message: "Deleted.",
    data: ebooks,
  };
};

// Export Ebooks responses
export { getEbooks, getEbook, addEbook, updateEbook, deleteEbook };
