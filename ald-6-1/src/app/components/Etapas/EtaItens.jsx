'use client'
import React from "react";
import {Card, CardBody, CardFooter, Image, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "/images/books.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/doguin.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/howmuch.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/learns.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/postit.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/books.png",
      price: "$8.00",
    },
    
  ];

  return (
    <div className="gap-2 grid grid-cols-2 md:grid-cols-6 sm:grid-cols-6 px-8 mx-8">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Popover placement="down">
                <PopoverTrigger>
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
                />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                    <div className="text-small font-bold">Popover Content</div>
                    <div className="text-tiny">This is the popover content</div>
                    </div>
                </PopoverContent>
            </Popover>
            </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
