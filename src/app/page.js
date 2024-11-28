'use client'
import Image from "next/image";
import Logo from "../../public/Logo.png"
import { CgProfile } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { CiBullhorn } from "react-icons/ci";
import { useState } from "react";
import "./style.css"

export default function Home() {
  // const [visibility, setVisibility] = useState(false)



  return (
    <div className="bg-white h-screen w-full">
      {/* Header start */}
      <div className="flex items-center gap-12">
        <Image src={Logo} alt="Logo" width={100} height={100}/>
        <input type="search" name="Search" id="Search" placeholder="Enter keywords" className="py-4 px-6 border rounded-lg w-96 text-slate-900" />
      </div>
      {/* Input filters */}
      <div className="w-full flex mt-10 justify-around">
          <input type="text" placeholder="Category" className="px-4 py-2 w-80 text-slate-500 border-slate-400 border-2 rounded-lg"/>
          <input type="text" placeholder="Sub-Category" className="px-4 py-2 w-80 text-slate-500 border-slate-400 border-2 rounded-lg"/>
          <input type="text" placeholder="Operator" className="px-4 py-2 w-80 text-slate-500 border-slate-400 border-2 rounded-lg"/>
          <input type="text" placeholder="Value" className="px-4 py-2 w-80 text-slate-500 border-slate-400 border-2 rounded-lg"/>
          <button type="submit" className="bg-blue-900 text-white px-6 py-2 border rounded-lg">Search</button>
      </div>
      {/* Account Cards */}
      <div className="grid mt-20 gap-6 px-10 grid-cols-4">
          {/* Content */}
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        <div className="cardWrapper relative" >
          <div className="editBar">
            <MdEdit className="my-4 ml-3"/>
            <FaCalendarAlt className="my-4 ml-3"/>
            <CiBullhorn className="my-4 ml-3"/>
          </div>
          <div className="flex">
          <div className="h-10 w-10 border bg-red-400 rounded-full p-4 flex justify-center items-center mr-2">rj</div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
          <CgProfile className="text-slate-400"/>
          <p>Rahulkuamr Pali</p>
          </div>
            <div className="flex items-center gap-2">
          <IoMdMail  className="text-slate-400"/>
          <p>palrahulkuamr@gmail.com</p>
          </div>
          </div>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <FaBuilding  className="text-slate-400"/>
            <p>Vrajbhhomi complex akwa road</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p className="text-[#475569]">7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <IoIosCall className="text-slate-400"/>
            <p>7048042144</p>
          </div>
          <div className="flex gap-5 items-center ml-3">
            <MdGroups className="text-slate-400"/>
            <p>Member</p>
          </div>
        </div>
        
      </div>
        <div className="bg-[#000000] flex gap-20 justify-around w-full h-[400px] mt-20">
            <div className="mt-20">
              <p className="font-extrabold mb-1">Location</p>
              <div className="flex flex-col gap-2">
                <p>India</p>
                <p>America</p>
              </div>
            </div>
            <div className="mt-20">
              <p className="font-extrabold mb-1">Services</p>
              <div className="flex flex-col gap-2 uppercase">
                <p>Web Development</p>
                <p>Api development</p>
                <p>App developement</p>
                <p>CRM Development</p>
                <p>Seo Development</p>
                <p>deveops</p>
              </div>
            </div>
            <div className="mt-20">
              <p className="font-extrabold mb-1">Company</p>
              <div className="flex flex-col gap-2 uppercase">
                <p>Portfolio</p>
                <p>About us</p>
                <p>Blog</p>
                <p>Sitemap</p>
              </div>
            </div>
            <div className="mt-20">
              <p className="font-extrabold mb-1">Contact</p>
              <div className="flex flex-col gap-2 uppercase">
                <p>7048369852</p>
                <p>8521479632</p>
                <p>Connect@prigtack.com</p>
              </div>
            </div>
            
        </div>
    </div>
  );
}
