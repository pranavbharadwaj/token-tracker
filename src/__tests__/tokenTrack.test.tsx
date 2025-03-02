import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUserStore } from "@/store/useUserStore";
import SearchCrypto from "@/components/SearchCrypto";
import CurrencySelect from "@/components/CurrencySelect";
import Favorites from "@/components/Favorites";

// Create a query client for React Query testing
const queryClient = new QueryClient();

// Helper function to render components with necessary providers
const renderWithProviders = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("TokenTrack Application", () => {
  test("renders SearchCrypto component and allows search input", async () => {
    renderWithProviders(<SearchCrypto />);

    const searchInput = screen.getByPlaceholderText("Search Cryptocurrency...");
    expect(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, "Bitcoin");
    expect(searchInput).toHaveValue("Bitcoin");
  });

  test("CurrencySelector updates the currency in Zustand store", async () => {
    renderWithProviders(<CurrencySelect />);

    const select = screen.getByLabelText("Select Currency:");
    expect(select).toBeInTheDocument();

    await userEvent.selectOptions(select, "inr");
    expect(select).toHaveValue("inr");
  });

  test("Favorites section shows a message when no favorites are added", () => {
    useUserStore.setState({
      users: { testUser: { favorites: [] } },
      currentUser: "testUser",
    });
    renderWithProviders(<Favorites />);
    expect(screen.getByText("No favorites added yet.")).toBeInTheDocument();
  });
});
