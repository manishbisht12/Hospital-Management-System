import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";


const Home = () => {
  return (
  <>
  <Hero title={"welcome to zeecare Medical institude | Your  Trusted Helathcare provider"} 
            imageUrl={"/hero.png"}
            />
  <Biography imageUrl={"./about.png"}/>
  <Departments/>
  <MessageForm/>
  </>
  );
};

export default Home;
