function CalculatorApp() {
  return (
    <div className="calculator">
      <div className="input-textbox">
        <input type="text" />
      </div>
      <div className="btns-container">
        <div className="row">
          <button className="clear">AC</button>
          <button className="delete-char">
            <i className="fa-solid fa-delete-left"></i>
          </button>
          <button className="percentage">
            <i className="fa-solid fa-percent"></i>
          </button>
          <button className="divide">
            <i className="fa-solid fa-divide"></i>
          </button>
        </div>
        <div className="row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="multiply">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="subtract">
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div className="row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="add">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="row">
          <button>
            x<sup>y</sup>
          </button>
          <button>0</button>
          <button>.</button>
          <button className="calculate">
            <i className="fa-solid fa-equals"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorApp;
