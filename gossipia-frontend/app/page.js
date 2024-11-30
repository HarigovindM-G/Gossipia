"use client"
// import MainComponent from "../components/MainComponent";
import dynamic from 'next/dynamic';
import Landing from '@/components/landing';
import GossipCards from '@/components/gossipCards';
import TeamCards from '@/components/TeamCards';
import Footer from '@/components/Footer';
const MainComponent = dynamic(() => import('../components/mainComponent'), { ssr: false });


export default function Home() {
  return (
    <div className="bg-white">
        <Landing/>
        <GossipCards/>
        <MainComponent />
        <TeamCards/>
        <Footer/>
    </div>
  );
}
