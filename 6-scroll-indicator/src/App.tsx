import React from "react";
import ScrollIndicator from "./ScrollIndicator";

const App: React.FC = () => {
  return (
    <div>
      <ScrollIndicator />
      <div style={{ height: "2000px", padding: "20px" }}>
        <h1>Scroll down to see the scroll indicator</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          neque purus. Donec ullamcorper tellus et diam tempor, ut vulputate
          massa auctor. Vivamus ultricies ligula orci, at rhoncus ante pretium
          tristique. In urna est, pretium at pellentesque eget, pretium non
          felis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Morbi a facilisis libero. Curabitur
          placerat urna eu mi luctus maximus sed sit amet tortor. Aenean mollis
          rhoncus magna, fermentum sodales nulla placerat et. Sed sed purus ut
          justo volutpat placerat id nec sapien. Sed quam est, consequat ut
          massa sit amet, commodo tempus libero. Ut vel urna interdum, consequat
          est vitae, finibus dolor. Duis semper sapien vel libero vulputate, non
          semper turpis tempor. In hac habitasse platea dictumst. Phasellus
          pellentesque, elit ut lobortis hendrerit, nisl purus consectetur
          dolor, id finibus velit augue vitae mauris. Suspendisse nunc ante,
          sodales non maximus vel, suscipit sit amet ipsum. Pellentesque nec
          sapien justo. Nunc porta, justo eget tempor mollis, orci lectus
          posuere enim, sit amet tempus purus metus vel metus. Pellentesque
          semper tempus velit eget sagittis. Quisque nec tellus hendrerit,
          pharetra lacus vel, rutrum nulla. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent gravida velit tellus, ac finibus enim rutrum nec. Phasellus
          eleifend ipsum sapien, quis luctus urna gravida at. Aenean at interdum
          augue. Nam dapibus, dui sit amet dapibus scelerisque, sem dui sodales
          odio, at consequat erat magna non ipsum. In in lectus non velit
          sodales molestie. In hac habitasse platea dictumst. Mauris eu nunc
          ultrices, gravida nulla pharetra, viverra sem. Sed dictum vitae purus
          in suscipit. Mauris iaculis ligula id arcu porttitor, a euismod felis
          posuere. Curabitur eget libero vitae magna consectetur malesuada.
          Integer rutrum fringilla congue. Nulla facilisi. Aliquam venenatis
          ornare augue, non consectetur eros ullamcorper quis. Sed vulputate
          facilisis felis, ac fermentum mi convallis vel. Nunc ac lectus quis
          arcu fermentum maximus. Vestibulum blandit est aliquam ex feugiat
          consectetur. In vel cursus tellus. Etiam auctor sed leo eu tempus.
          Aliquam vestibulum dapibus neque quis egestas. Maecenas sollicitudin
          gravida cursus. Nullam vel sagittis magna. Etiam euismod sollicitudin
          euismod. Praesent euismod libero quam, a congue libero mollis vitae.
          Pellentesque cursus nisl a lectus lacinia condimentum. Proin iaculis
          lacinia gravida. Cras luctus metus sapien, sit amet pretium eros
          scelerisque a. Phasellus volutpat, justo sed malesuada gravida, sapien
          ex fringilla turpis, sit amet aliquet nibh sem et dolor.
        </p>
      </div>
    </div>
  );
};

export default App;
