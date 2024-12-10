import { LucideCalendarClock } from "lucide-react";
import { ReactElement } from "react";
import { BiCog } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import {
  MdOutlineDownloadDone,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";

interface serviceDetailProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServiceDetail = (props: serviceDetailProps) => {
  const { icon, title, description } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-3 animate-fadeInUp hover:scale-105 transition-transform duration-300">
      <div className="text-orangePrimary">{icon}</div>
      <div className="font-semibold text-[20px]">{title}</div>
      <div className="text-center text-[15px] w-[80%] line-clamp-3">
        {description}
      </div>
    </div>
  );
};

const ServicesSummary = () => {
  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center gap-10">
      <div className="w-full py-2 font-semibold text-[30px] flex justify-center text-white gap-2">
        Our <span className="text-orange-500">Installation</span>
        Process
      </div>
      <div className="flex flex-col items-center w-full gap-20 text-white">
        <div className="flex gap-20">
          <ServiceDetail
            icon={<LucideCalendarClock size={60} />}
            title="Book Your Slot"
            description="Schedule a slot in online or call to specify time and location"
          />
          <ServiceDetail
            icon={<MdOutlineMarkEmailUnread size={60} />}
            title="Get Order Confirmation"
            description="Receive booking confirmation with technician details and scheduled time slot"
          />
          <ServiceDetail
            icon={<GrUserWorker size={60} />}
            title="Technician Arrival"
            description="Technician arrives at your location, equipped with necessary tools"
          />
        </div>
        <div className="flex gap-20">
          <ServiceDetail
            icon={<BiCog size={60} />}
            title="Installation"
            description="Technician installs the requested service ensuring proper placement and connections without any wire cuts"
          />
          <ServiceDetail
            icon={<MdOutlineDownloadDone size={60} />}
            title="Testing and Verification"
            description="Technician will test and verify the performance and functionality of the installations"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSummary;
