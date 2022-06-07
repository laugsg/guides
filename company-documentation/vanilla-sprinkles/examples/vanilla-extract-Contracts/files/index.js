import React from "react";

// 1.  Theme into Component
import { themePrimary } from "./contracts/contract.css";
// 2. import Style Definition
import { themePrimaryDefinition } from "./styles.css";

export default function HomePage() {
  return (
    <>
    {/* // 3. Place the Theme as parent wrapper */}
    <div className={themePrimary}>
      {/* 4. Place the Style Definition as child wrapper */}
      <div className={themePrimaryDefinition}>
        <h1>Heading Title</h1>
      </div>
    </div>
    </>
  );
}
