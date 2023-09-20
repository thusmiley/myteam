import React from "react";

const CTA = () => {
  return (
    <section className="cta-bg py-[83px] xl:py-[76px]">
      <div className="w-container mx-auto text-center text-sacramentoGreen md:max-w-[573px] md:flexBetween xl:max-w-[917px]">
        <h2 className="heading2 mb-[33px] md:mb-0">Ready to get <br className="md:hidden"/>started?</h2>
        <a href="/contact" className="cta cta-black">
          contact us
        </a>
      </div>
    </section>
  );
};

export default CTA;
