import axios from "axios";

export default function ApiAvasus(url: string) {
  return axios.get(url).then((response) => response.data);
}
