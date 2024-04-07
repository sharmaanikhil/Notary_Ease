import React, { useState, useEffect, useRef } from 'react';

const SignUp = () => {
  const [isLawyer, setIsLawyer] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    gender: '',
    mobileNo: '',
    uniqueNo: '',
    region: '',
    experience: '',
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (e) => {
    setIsLawyer(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data to the console
    // You can perform additional actions here, such as sending the data to a server
  };

  useEffect(() => {
    if (isLawyer && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isLawyer]);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-1">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNo" className="block mb-1">
              Mobile No
            </label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isLawyer" className="block mb-1">
              Are you a lawyer?
            </label>
            <input
              type="checkbox"
              id="isLawyer"
              name="isLawyer"
              checked={isLawyer}
              onChange={handleCheckBoxChange}
            />
          </div>
          {isLawyer && (
            <>
              <div className="mb-4">
                <label htmlFor="uniqueNo" className="block mb-1">
                  Unique No
                </label>
                <input
                  type="text"
                  id="uniqueNo"
                  name="uniqueNo"
                  value={formData.uniqueNo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="region" className="block mb-1">
                  Region
                </label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
