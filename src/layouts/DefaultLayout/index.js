import PropTypes from "prop-types";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

function DefaultLayout({ children }) {
  return (
    <div className='bg-gray-900 min-h-dvh overflow-hidden'>
      <div className='max-w-6xl mx-auto md:p-5'>
        <Header />
        <Navbar />
        <div className='flex p-5 md:rounded-xl bg-gray-900 border-2 border-blue-500 shadow-sm md:mt-3'>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

