"use client"

import React, {useContext, useEffect, useState} from "react";
import { useParams } from 'next/navigation';
import {Button} from "@/components/ui/button";
import { AppContext } from "@/contexts/AppContext";
import { toast } from "sonner";
interface Props {}

const PricingPanel = ({}: Props) => {
  const { user } = useContext(AppContext);

  const purchase = async () => {
    if (!user || !user.uuid) {
      toast.error("Please login first");
      return;
    }
    console.log("purchase");
    try {
        const params = {
            userId: user.userId,
            type: 'single',
          };

        const resp = await fetch("/api/payment/subscribe", {
          method: "POST",
          body: JSON.stringify(params),
        });
  
        if (resp.ok) {
          const res = await resp.json();
          window.location.href = res.data.url;
        }


    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-2"> 
        <Button onClick={() => {
          purchase();
        }}>
          Buy
        </Button>
    </div>
  );
};

export default PricingPanel;