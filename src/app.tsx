import React from "react";
import Input from "./Input";

export default function Index() {
  return (
    <>
      <h1 className="title">Inputs</h1>

      <div className="section">
        <div className="section-title">{"<Input />"}</div>
        <Input />
      </div>

      <div className="section">
        <div className="section-title">{"<Input error />"}</div>
        <Input error />
      </div>

      <div className="section">
        <div className="section-title">{"<Input disabled />"}</div>
        <Input disabled />
      </div>

      <div className="multi-section">
        <div className="section">
          <div className="section-title">
            {'<Input helperText="Some interesting text" />'}
          </div>
          <Input helperText="Some interesting text" />
        </div>

        <div className="section">
          <div className="section-title">
            {'<Input helperText="Some interesting text" error />'}
          </div>
          <Input helperText="Some interesting text" error />
        </div>
      </div>

      <div className="multi-section">
        <div className="section">
          <div className="section-title">{'<Input startIcon="phone" />'}</div>
          <Input startIcon="phone" />
        </div>

        <div className="section">
          <div className="section-title">{'<Input endIcon="lock" />'}</div>
          <Input endIcon="lock" />
        </div>
      </div>

      <div className="section">
        <div className="section-title">{'<Input value="Text" />'}</div>
        <Input value="Text" />
      </div>

      <div className="multi-section">
        <div className="section">
          <div className="section-title">{'<Input size="sm" />'}</div>
          <Input size="sm" />
        </div>

        <div className="section">
          <div className="section-title">{'<Input size="md" />'}</div>
          <Input size="md" />
        </div>
      </div>

      <div className="section">
        <div className="section-title">{"<Input fullWidth />"}</div>
        <Input fullWidth />
      </div>

      <div className="section">
        <div className="section-title">{'<Input multiline row="4" />'}</div>
        <Input multiline row="4" />
      </div>

      <a
        id="username"
        target="blank"
        href="https://devchallenges.io/portfolio/bdocoder"
      >
        created by <strong>bdocoder</strong> - devChallenges.io
      </a>
    </>
  );
}
