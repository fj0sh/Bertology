"use client";
import BookingRequestCard from "@/components/cards/BookingRequestCard";
import BookingRequestModal from "@/components/Modals/BookingRequestModal";
import React, { useState } from "react";

const BookingRequest = () => {
  const [isRequestShow, setIsRequestShow] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <BookingRequestModal
        date="test"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque finibus felis facilisis ultrices. Vivamus aliquam faucibus ipsum, sed fringilla neque condimentum ac. Pellentesque facilisis sit amet velit vitae volutpat. Praesent eget dictum felis. Sed eget semper urna, id maximus ligula. Vivamus luctus malesuada mattis. Proin sodales lorem felis, et pharetra ex porttitor ac. Aenean hendrerit condimentum elit, non fermentum sapien.

Aenean vel ligula auctor, blandit lorem dignissim, euismod quam. Pellentesque id imperdiet metus, vel aliquam dui. Vestibulum nisi leo, ornare laoreet lobortis in, blandit vitae diam. Nam condimentum efficitur eleifend. Pellentesque nec nisi purus. Vivamus aliquet quis dolor at euismod. Donec id luctus est. Ut viverra eget libero a viverra. Duis auctor pretium fermentum. Aenean at consequat arcu, sit amet rhoncus erat. Sed molestie velit non tortor auctor condimentum non id velit. Cras eleifend sed tellus at gravida. Quisque ornare a eros pharetra vulputate. Donec at urna ac magna aliquam sagittis quis quis libero. Fusce ex diam, porttitor eget dui sit amet, pellentesque ornare augue.

Vestibulum cursus ut ex in sollicitudin. Sed viverra lorem lacus, eget porta velit pellentesque eu. Mauris quis neque in neque vestibulum ornare. Maecenas tortor nisl, lacinia ut sodales et, rhoncus nec massa. Aliquam pulvinar ligula purus, ut dictum neque sagittis at. Nullam sollicitudin nunc non libero fermentum vestibulum. Proin vitae efficitur purus. Nam rhoncus est non vulputate semper. Praesent ac vestibulum lectus.

In hac habitasse platea dictumst. Fusce tincidunt nisi eu pretium ultrices. Aenean ut metus eget urna semper interdum. In laoreet, diam eu posuere imperdiet, massa enim vestibulum neque, nec mollis lacus diam a ex. Proin condimentum, nulla sit amet congue rutrum, diam neque maximus turpis, sed pellentesque turpis orci vel lectus. Sed convallis vehicula molestie. Proin sit amet sagittis nibh. Fusce luctus suscipit nunc, vitae fermentum enim consectetur vitae. Maecenas ante nisi, elementum vitae erat nec, malesuada feugiat velit. Ut pellentesque vel velit et porttitor. Ut a justo et elit tempus malesuada. Maecenas egestas laoreet velit ut vestibulum. Fusce eu ex eros. Phasellus convallis diam ut mi fringilla, et porttitor dui convallis."
        location="test"
        model="test"
        name="test"
        isOpen={isRequestShow}
        onClose={() => setIsRequestShow(false)}
      />

      <BookingRequestCard
        description="Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id elit. Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id el it. Lorem ipsum dolor sit am equivalents of Lore maur is sed diam non pro id elit. Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id elit in id tempor vit  eu dui. Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id el  it. Lorem ipsum dolor sit am equivalents of Lore  mauris sed diam non pro id elit in id tempor vit e"
        date="now"
        vehicleType="Honda"
        location="Mabolo"
        bookingId={0}
      />
    </div>
  );
};

export default BookingRequest;
