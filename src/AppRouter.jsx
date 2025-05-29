import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Project } from "./pages/Project";
import { Home } from "./pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project/:id" element={<Project />} />
        </Routes>
    </BrowserRouter>
  )
}
