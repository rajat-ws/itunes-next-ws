import { fireEvent, render, timeout } from "@utils/testUtils";
import SearchBox from "../index";

describe("<SearchBox />", () => {
  const debouncedHandleOnChangeSpy = jest.fn();

  it("should render and match the snapshot", () => {
    const { baseElement } = render(
      <SearchBox debouncedHandleOnChange={debouncedHandleOnChangeSpy} />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should render one search component", () => {
    const { getByTestId } = render(
      <SearchBox debouncedHandleOnChange={debouncedHandleOnChangeSpy} />
    );
    expect(getByTestId("search-box")).toBeInTheDocument();
  });

  it("should call the requested tracks data on search input change", async () => {
    const { getByTestId } = render(
      <SearchBox debouncedHandleOnChange={debouncedHandleOnChangeSpy} />
    );
    fireEvent.change(getByTestId("search-bar"), {
      target: { value: "Anuv" },
    });

    expect(debouncedHandleOnChangeSpy).toHaveBeenCalled();
    await timeout(500);
    fireEvent.change(getByTestId("search-bar"), {
      target: { value: "" },
    });
    expect(debouncedHandleOnChangeSpy).toHaveBeenCalled();
    expect(debouncedHandleOnChangeSpy).toHaveBeenCalledTimes(2);
  });
});
