import { useRouter } from "next/router";
import { toast } from "react-toastify";

const control = (err, msg, formRef) => {
  const router = useRouter();
  if (err) {
    toast.error(msg);
    formRef?.current.reset();
  } else {
    toast.success(msg);
    return router.push("/");
  }
};
export const Signup = async (email, password, name, formRef) => {
  try {
    const res = await fetch(`http://localhost:4000/customers/signup`, {
      method: "post",
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
    const data = await res.json();
    if (data.valid) {
      control(null, data.msg);
    }
    control(true, data.err, formRef);
  } catch (err) {
    return control(true, err.message, formRef);
  }
};
export const Signin = async (email, password) => {
  try {
    const res = await fetch(`http://localhost:4000/customers/signin`, {
      method: "post",
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    if (data.valid) {
      return control(null, data.msg);
    }
    control(true, data.err);
  } catch (err) {
    return control(true, err.message);
  }
};

export const Logout = async () => {
  try {
    const res = await fetch(`http://localhost:4000/customers/logout`);
    const data = await res.json();
    if (data.valid) {
      return control(null, data.msg);
    }
    return control(true, data.err);
  } catch (err) {
    return control(true, err.message);
  }
};

export const currentCustomer = async () => {
  try {
    // const res = await fetch(`http://localhost:4000/customers/currentUser`);
    // const data = await res.json();
    // if (data.valid) {
    //   return data.data;
    // }
    return {
      data: {
        displayName: "Humphrey",
        photoURL: null,
      },
    };
  } catch (err) {
    return console.error(err.message);
  }
};
