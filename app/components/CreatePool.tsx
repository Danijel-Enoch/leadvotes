"use client"
import React, { useState } from 'react'
import Poll from './Poll';
import Contestant from './Contestant';
import Settings from './Settings';

const CreatePool = () => {

  const [activeTab, setActiveTab] = useState('poll');

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'poll':
        return <Poll />;
      case 'contestant':
        return <Contestant />;
      case 'setting':
        return <Settings />;
      default:
        return null;
    }
  }

  return (
    <main className='flex justify-center mt-[70px] lg:mt-[120px] overflow-hidden'>
      <section className='font-medium'>
        <h1 className='font-semibold lg:text-[40px] text-[30px] lg:leading-[60px] mb-[30px]  'data-aos="fade-in">Create poll</h1>
        <div>
          <div className='bg-[#1B5CFE] lg:text-[30px] lg:leading-[45px] rounded-t-[12px] flex justify-evenly w-full ' data-aos="fade-out">
            <h1 className='py-[15px] lg:py-[30px] pr-[20px] pl-[30px] lg:pl-[142px] lg:pr-[91px] rounded-tl-[12px] ' onClick={() => handleTabClick('poll')} style={{backgroundColor: activeTab === 'poll' ? '#151515' : '', color: activeTab=== 'poll'? 'white': ''}} >Poll</h1>
            <h1 className='py-[15px] lg:py-[30px] pr-[20px] pl-[30px] lg:pl-[91px] lg:pr-[88px] ' onClick={() => handleTabClick('contestant')} style={{backgroundColor: activeTab === 'contestant' ? '#151515' : '', color: activeTab=== 'contestant'? 'white': ''}}>Contestant</h1>
            <h1 className='py-[15px] lg:py-[30px] pr-[20px] pl-[30px] lg:pl-[91px] lg:pr-[91px] rounded-tr-[12px]  ' onClick={() => handleTabClick('setting')} style={{backgroundColor: activeTab === 'setting' ? '#151515' : '', color: activeTab=== 'setting'? 'white': ''}}>Settings</h1>
          </div>
        </div>
{renderTabContent()}
      </section>
    </main>
  )
}

export default CreatePool