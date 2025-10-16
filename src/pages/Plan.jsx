import React, { useEffect } from 'react'
import HeroComponent from '../component/HeroComponent';
import assets from '../assets/assests';
import { PiHeartbeatFill, PiStarFill, PiWalletFill, PiUsersFill, PiChartLineFill, PiGiftFill, PiTrophyFill, PiRocketFill, PiGlobeFill, PiShieldCheckFill, PiClockFill, PiMoneyFill, PiHandCoinsFill, PiThumbsUpFill, PiThumbsUp } from 'react-icons/pi';

const Plan = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Removed [location] assuming it was a typo; import useLocation if needed

    const heroData = [
        {
            title: 'Compensation Plan',
            subtitle: 'We exist to bridge the gap between nature and opportunity, offering products that promote better living while creating a proven system for anyone to build wealth and achieve long-term financial independence.',
            imageSrc: assets.pic17,
            ctaText: 'Shop Now',
            ctaLink: '/shop',
            bgColor: 'bg-pryClr',
        },
    ];



    const profitData = [
        {
            id: 1,
            icon: PiHeartbeatFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Retail Profit',
            description: 'You can earn instant profit by selling products directly at retail price',
        },
        {
            id: 2,
            icon: PiStarFill,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Direct Sponsor Bonus',
            description: 'Earn rewards whenever you directly bring in a new member or customer.',
        },
        {
            id: 3,
            icon: PiWalletFill,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Indirect Sponsor Bonus',
            description: 'Get bonuses from the efforts of those sponsored by your direct recruits.',
        },
        {
            id: 5,
            icon: PiChartLineFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Upgrade Bonus',
            description: 'Enjoy extra earnings when team members upgrade their package or level',
        },
        {
            id: 6,
            icon: PiGiftFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Activities Bonus',
            description: 'Earn incentives for active participation and consistent engagement',
        },
        {
            id: 7,
            icon: PiTrophyFill,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Unilevel Bonus',
            description: 'Receive income from multiple levels of your team’s performance.',
        },
        {
            id: 8,
            icon: PiRocketFill,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Unilevel Pool Bonus',
            description: 'Share in the pooled bonuses distributed across all active members',
        },
        {
            id: 9,
            icon: PiGlobeFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Awards and Appreciation',
            description: 'Get recognized and rewarded for your hard work and milestones.',
        },
        {
            id: 10,
            icon: PiShieldCheckFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Winners Celebrations',
            description: 'Be part of special recognition events that honor achievers',
        },
        {
            id: 11,
            icon: PiClockFill,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Max Store Bonus',
            description: 'Earn high-value bonuses from maximum store-level achievements.',
        },
        {
            id: 12,
            icon: PiMoneyFill,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Mini Store Bonus',
            description: 'Enjoy extra income through mini store performance rewards',
        },
        {
            id: 13,
            icon: PiHandCoinsFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Max Store Appreciation Bonus',
            description: 'Get appreciated with bonuses for outstanding store performance.',
        },
        {
            id: 14,
            icon: PiThumbsUpFill,
            iconColor: 'text-pryClr',
            iconBgColor: 'bg-pryClr/30',
            title: 'Crown Jewel Appreciation Bonus',
            description: 'Receive exclusive rewards for reaching top ranks and excellence.',
        },
        {
            id: 15,
            icon: PiThumbsUp,
            iconColor: 'text-secClr',
            iconBgColor: 'bg-secClr/30',
            title: 'Stores Sponsor Bonus',
            description: 'Earn bonuses by sponsoring and supporting store growth.',
        },
    ];

    return (
        <div >
            <HeroComponent heroData={heroData} />


            <div className="w-full flex bg-white items-center justify-center text-black py-8 md:py-16">
                <div className="w-[90%] flex flex-col gap-4 md:gap-6 items-center text-center text-black">
                    <p className='font-bold text-2xl md:text-4xl'>Ways of Earning</p>
                    <p className='w-full lg:w-[65%] text-sm md:text-lg leading-7 lg:leading-5'>Your journey to financial freedom starts here, earn more, achieve more.</p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                        {profitData.map((item) => (
                            <div
                                key={item.id}
                                className="w-full rounded-lg bg-white border border-black/10 shadow-sm py-4 px-4 md:px-6 flex gap-4 md:gap-6 items-center text-start"
                            >
                                <div className={item.iconBgColor + ' rounded-full p-3'}>
                                    <item.icon className={item.iconColor + ' text-3xl'} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-sm md:text-base">{item.title}</p>
                                    <p className="text-sm md:text-base">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan