import { TruckIcon } from "lucide-react";

const PaymentAndShipping = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg bg-accent px-5 py-3 text-xs">
        <div className="flex items-center gap-3">
          <TruckIcon size={24} />

          <div className="flex flex-col">
            <p>
              Entrega via{" "}
              <span className="font-semibold">
                FSPacket<sup>&reg;</sup>
              </span>
            </p>
            <p className="text-primary">Envio para todo Brasil</p>
          </div>
        </div>

        <p className="font-semibold">
          Frete grátis<sup>*</sup>
        </p>
      </div>
    </div>
  );
};

export default PaymentAndShipping;
