"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const State = [
  {
    state: "Bayelsa",
  },
  {
    state: "Rivers",
  },
  {
    state: "Delta",
  },
  {
    state: "Imo",
  },
  {
    state: "Edo",
  },
];

const Location = () => {
  const [address, setAddress] = useState(false);
  const [state, setState] = useState();
  const modalRef = useRef();

  useEffect(() => {
    address ? modalRef.current.showModal() : modalRef.current.close();
  }, [address]);
  return (
    <div className="flex flex-col gap-2 mb-3">
      <div className="seg_bg_primary flex justify-between p-2 items-center">
        <div className=" flex flex-col gap-2 p-2">
          <h3 className=" text-xl font-medium mb-2">SHIPPING ADDRESS</h3>
          <h4>
            <span>Humphrey Joshua</span> <span>08149593345</span>
          </h4>
          <p>
            <span>Azikel Road</span> <span>Oyinsco Lodge</span>
          </p>
          <p>
            <span>Ogbia</span> <span>Bayelsa</span> <span>Nigeria</span>
          </p>
          <p className="msg"></p>
        </div>
        <button
          type="button"
          className=" bg-sky-500 text-lg px-3 py-2 rounded-md h-fit text-white font-normal border"
          onClick={() => setAddress(() => true)}
        >
          Add address
        </button>
      </div>
      <dialog ref={modalRef} className="p-3 w-[60%]">
        <h3 className="flex text-xl font-medium mb-2 justify-between">
          Add Address{" "}
          <span
            className=" pr-1 text-3xl cursor-pointer"
            onClick={() => setAddress(() => false)}
          >
            &times;
          </span>
        </h3>
        <div className="personal_info valid mb-2">
          <h4 className=" text-lg font-normal mb-2">Personal Information</h4>
          <div className="border h-9 border-gray-500 p-1 w-full rounded">
            <input
              type="text"
              name=""
              required
              id="phone"
              placeholder="Phone Number*"
            />
          </div>
          <p>Please enter 10-11 digits</p>
        </div>
        <div className="address_info">
          <h4 className=" text-lg font-normal mb-2">Address</h4>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="full_add valid">
              <div className="border h-9 border-gray-500 p-1 w-full rounded">
                <input
                  type="text"
                  required
                  id="street"
                  placeholder="Street Address, P. O. box, etc"
                />
              </div>
              <p>Please provide a full address</p>
            </div>
            <div className="building">
              <div className="border h-9 border-gray-500 p-1 w-full rounded">
                <input
                  type="text"
                  id="apartment"
                  placeholder="Apt,Suite,Unit,etc.(Optional)"
                />
              </div>
              <p>Please provide your Apt,Suite,Unit,etc.(Optional) </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="border h-9 border-gray-500 p-1 w-full rounded">
              {state === "Bayelsa State" ? (
                <select name="Lga" id="lga">
                  <option value="Yenagoa">Yenagoa</option>
                  <option value="Ogbia">Ogbia</option>
                  <option value="Sagbama">Sagbama</option>
                  <option value="Ekeremor">Ekeremor</option>
                  <option value="Brass">Brass</option>
                  <option value="Nembe">Nembe</option>
                  <option value="Kolokuma/Opokuma">Kolokuma/Opokuma</option>
                  <option value="Southern Ijaw">Southern Ijaw</option>
                </select>
              ) : (
                <input type="text" id="apartment" placeholder="LGA" />
              )}
            </div>
            <div className="border h-9 border-gray-500 p-1 w-full rounded">
              <select
                name="State"
                value={state}
                onChange={() => setState(state)}
                id="state"
              >
                {State.map((s) => (
                  <option key={s.state} value={s.state}>
                    {s.state}
                  </option>
                ))}
              </select>
            </div>
            <div className="border h-9 border-gray-500 p-1 w-full rounded">
              <select name="" id="country">
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
          </div>
        </div>
        <p className="warning"></p>
        <div className="flex justify-center mt-3 gap-[5rem]">
          <Button variant="info">Comfirm</Button>
          <Button onClick={() => setAddress(() => false)} variant="warning">
            Cancel
          </Button>
        </div>
      </dialog>
    </div>
  );
};

export default Location;
