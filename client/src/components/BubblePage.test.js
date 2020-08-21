import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockFetch } from './fetchApi'
import '@testing-library/jest-dom/extend-expect'

jest.mock('./fetchApi')

const testData =  [{
  color: "aliceblue",
  code: {
    hex: "#f0f8ff"
  },
  id: 1
},
{
  color: "limegreen",
  code: {
    hex: "#99ddbc"
  },
  id: 2
}
]


test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetch.mockResolvedValueOnce(testData)
  const { debug, getByText } = render(<BubblePage />);
  await waitFor(() => {
    expect(getByText(/bubbles/i)).toBeInTheDocument();
  })
  debug();
});
