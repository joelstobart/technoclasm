import * as React from "react";

const PlantIcon = ({ source, altText, title }) => (
    <div>
      <div>
        <img
          src={source}
          alt={altText}
          height="auto"
          width="80%"
          style={{
            textAlign: `center`}}
        />
      </div>
      <div>
        <h3>
          {title}
        </h3>
      </div>
    </div>
)

export default PlantIcon