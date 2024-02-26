import "./Design.css";

const CardDesign = () => {
  return (
            <div className="card_design">
            <div className="div-image">
                <img
                className="img-design"
                src="/svg/iconsService/design.svg"
                alt="icon ux/ui"
                />
            </div>

            <div className="content">
                <div>
                <h1 className="h_design">UI/UX Design</h1>
                </div>

                <p className="p_d">Mobile apps, WebSite Design.</p>
            </div>
            </div>
  );
};

export default CardDesign;
