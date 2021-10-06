import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { IPeopledata, Result } from "./types";

const PeopleContext = createContext<{
  people: Result[];
  person: Result | null;
  getPeople: (_page: number, _query: string) => void;
  error: string;
  loading: boolean;
  getPerson: (_personId: number) => void;
  paginate: {
    total_records: number;
    page: number;
    total_pages: number;
  };
}>({
  people: [],
  person: null,
  getPeople: () => {},
  error: "",
  loading: false,
  getPerson: () => {},
  paginate: {
    total_pages: 1,
    total_records: 0,
    page: 1,
  },
});

type Props = {
  children: ReactNode;
  client: ApolloClient<NormalizedCacheObject>;
};

const PEOPLE_QUERY = gql`
  query people($page: Int!, $query: String) {
    people(page: $page, query: $query) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

const PERSON_QUERY = gql`
  query person($personId: Int!) {
    person(personId: $personId) {
      nname
      height
      mass
      gender
      homeworld
    }
  }
`;

export default function PeopleProvider({
  children,
  client,
}: Props): React.ReactElement {
  const [people, setPeople] = useState<Result[] | []>([]);
  const [person, setPerson] = useState<Result | null>(null);
  const [paginate, setPaginate] = useState<{
    total_records: number;
    page: number;
    total_pages: number;
  }>({
    total_records: 0,
    page: 1,
    total_pages: 1,
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function getPeople(page: number, query: string) {
    setError("");
    setLoading(true);
    client
      .query({
        query: PEOPLE_QUERY,
        variables: {
          page,
          query,
        },
      })
      .then((res: any) => {
        setLoading(false);
        setPeople(res.data.people.results);
        setPaginate((prev) => ({
          ...prev,
          total_records: res.data.people.count,
          total_pages: res.data.people.count / 10,
          page,
        }));
      })
      .catch((err: any) => {
        setLoading(false);
        setError(err.message);
      });
  }

  useEffect(() => {
    getPeople(1, "");
  }, []);

  function getPerson(personId: number) {
    setLoading(true);
    setError("");
    client
      .query({
        query: PERSON_QUERY,
        variables: {
          personId,
        },
      })
      .then((res: any) => {
        setLoading(false);
        setPerson(res.data.person);
      })
      .catch((err: any) => {
        setLoading(false);
        setError(err.message);
      });
  }

  return (
    <PeopleContext.Provider
      value={{ people, person, getPeople, error, loading, getPerson, paginate }}
    >
      {children}
    </PeopleContext.Provider>
  );
}

export const usePeople = () => useContext(PeopleContext);
