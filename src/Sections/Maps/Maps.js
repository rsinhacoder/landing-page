import React from "react";

const sampleJSON = {
  name: "Pluralsight",
  number: 1,
  address: "India",
  website: "https://www.pluralsight.com/"
};

export default function Maps() {
  return (
    <div>
      {Object.keys(sampleJSON).map((key, i) => (
        <p key={i}>
          <span>Key Name: {key}</span>
          <span>Value: {sampleJSON[key]}</span>
        </p>
      ))}
    </div>
  );
}