import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockFetch } from './axiosWithAuth'
import '@testing-library/jest-dom/extend-expect'

jest.mock('./axiosWithAuth')

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


test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetch.mockResolvedValueOnce(testData)
  const { debug, getByText } = render(<BubblePage />);
  await waitFor(() => {
    expect(getByText(/something/i)).toBeInTheDocument();
  })
  debug();
});
