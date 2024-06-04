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
    <main className='flex justify-center mt-[120px] '>
      <section className='font-medium'>
        <h1 className='font-semibold text-[40px] leading-[60px] mb-[30px]  'data-aos="fade-in">Create poll</h1>
        <div>
          <div className='bg-[#4F4F4F] text-[30px] leading-[45px] rounded-t-[12px] flex justify-evenly ' data-aos="fade-out">
            <h1 className='py-[30px] pl-[142px] pr-[91px] rounded-tl-[12px] ' onClick={() => handleTabClick('poll')} style={{backgroundColor: activeTab === 'poll' ? '#F9F9F9' : '', color: activeTab=== 'poll'? 'black': ''}} >Poll</h1>
            <h1 className='py-[30px] pl-[91px] pr-[88px] ' onClick={() => handleTabClick('contestant')} style={{backgroundColor: activeTab === 'contestant' ? '#F9F9F9' : '', color: activeTab=== 'contestant'? 'black': ''}}>Contestant</h1>
            <h1 className='py-[30px] pl-[91px] pr-[91px] rounded-tr-[12px]  ' onClick={() => handleTabClick('setting')} style={{backgroundColor: activeTab === 'setting' ? '#F9F9F9' : '', color: activeTab=== 'setting'? 'black': ''}}>Settings</h1>
          </div>
        </div>
{renderTabContent()}
      </section>
    </main>
  )
}

export default CreatePool