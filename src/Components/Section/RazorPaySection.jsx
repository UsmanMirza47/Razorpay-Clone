import React from 'react'

const RazorPaySection = () => {
  return (
    <section className="w-full bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-10">
      <div className="w-11/12 max-w-[1080px] mx-auto flex flex-col md:flex-row relative">
        {/* left part  */}
        <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)]">
          <h2 className="font-mullish font-bold text-2xl text-deepBlue">
            Join the 50,00,000+ businesses using Razorpay
          </h2>
          <div className="h-1 w-6 bg-greenLight my-4 mb-10"></div>
          <p className="font-mullish opacity-75">
            We make it easier for you to focus on building great products while
            we work on simplifying your payments. Become one of us by joining
            thousands of our happy users and simplify the online payment
            experience for your customers.
          </p>
          <p className="font-mullish mt-8 opacity-75">
            Focus on your business while we handle the complexities of payments
            for you.
          </p>
        </div>
        {/* right part  */}
        <div className="h-[500px] w-[600px] md:w-[500px] overflow-y-hidden relative mx-auto">
          <div
            style={{ background: "linear-gradient(180deg, #f4f8ff, #fff0)" }}
            className="absolute top-0 left-0 right-0 z-10 h-[150px]"
          ></div>

          <img
            src="./comanies.png"
            className="w-full moveUp relative -z-10"
          />

          <div
            style={{background: "linear-gradient(180deg, #fff0, #f4f8ff)"}}
            className="absolute bottom-0 left-0 right-0 z-10 h-[150px]"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default RazorPaySection