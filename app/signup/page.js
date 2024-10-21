import { signup } from "../login/action";

const Signup = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800">
          Sign Up
        </h3>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          formAction={signup}
          className="w-full py-3 text-white bg-blue-600 font-semibold rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
        >
          Sign Up
        </button>
        {/* 
              
              {error && (
                <div className="p-3 bg-red-100 border border-red-500 text-red-600 rounded-md text-center">
                  {error}
                </div>
              )}
              {isLoading && <Loader />}
              */}
      </form>
    </div>
  );
};

export default Signup;
