import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingContext } from "./context/LoadingContext"; // Make sure this path is correct
import Loader from "./components/Loader"; // Import the Loader component
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import AutoScrollButton from "./components/AutoscrollButton";
import ClickSpark from "./blocks/Animations/ClickSpark/ClickSpark";

const App = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Loader Animation */}
        {isLoading && <Loader isLoading={isLoading} />}
        
        {/* Main Content */}
        {!isLoading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Home />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <About />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Contact />
              <Footer />
            </motion.div> 
            <AutoScrollButton></AutoScrollButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;