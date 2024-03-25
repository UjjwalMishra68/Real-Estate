import React from "react";
import "./Accordian.css";
import Value from "../../assets/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Accordian = () => {
  return (
    <div className="Value Container">
      <div className="Value-left">
        <div className="mask">
          <img src={Value} alt="" />
        </div>
      </div>
      <div className="Value-right">
        <div className="Value-heading">
          <span className="Heading">
            <h2>Our Value</h2>
          </span>
          <span className="Heading">
            <h1>Value we give to you</h1>
          </span>
          <p className="Paragraph">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>
        </div>
        <div className="Value-accordion">
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
            style={{ border: "none", outline: 0 }}
          >
            <AccordionItem className="accordionItem">
              <AccordionItemHeading>
                <AccordionItemButton className="accordionButton">
                  <div className="accordion-content">
                    <i className="ri-shield-check-fill icon"></i>
                    <h4>Best interest rates on the market</h4>
                    <i className="ri-arrow-down-s-line icon"></i>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* --2nd-- */}
            <AccordionItem className="accordionItem">
              <AccordionItemHeading>
                <AccordionItemButton className="accordionButton">
                  <div className="accordion-content">
                    <i className="ri-shield-check-fill icon"></i>
                    <h4>Best interest rates on the market</h4>
                    <i className="ri-arrow-down-s-line icon"></i>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* --3rd-- */}
            <AccordionItem className="accordionItem">
              <AccordionItemHeading>
                <AccordionItemButton className="accordionButton">
                  <div className="accordion-content">
                    <i className="ri-shield-check-fill icon"></i>
                    <h4>Best interest rates on the market</h4>
                    <i className="ri-arrow-down-s-line icon"></i>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
