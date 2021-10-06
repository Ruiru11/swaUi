import { css } from "goober";
import { useState, useEffect, Fragment } from "react";
import Modal from "../../components/Modal";
import { usePeople } from "../../context/PeopleProvider";
import { Result } from "../../context/types";
import * as S from "./styled-components";

function SinglePerson({ item }: { item: Result }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <S.ListItem key={item.name} onClick={() => setIsOpen(true)}>
        <S.ListTitle>{item.name}</S.ListTitle>
        <S.ListDescription inverse={false}>
          Height: {item.height}
        </S.ListDescription>
        <S.ListDescription inverse={false}>
          Mass: {item.mass}
        </S.ListDescription>
        <S.ListDescription inverse={false}>
          Gender: {item.gender}
        </S.ListDescription>
      </S.ListItem>
      {isOpen && (
        <Modal label={item.name} setIsOpen={setIsOpen} isOpen={isOpen}>
          <S.ListDescription inverse={true}>
            Height: {item.height}
          </S.ListDescription>
          <S.ListDescription inverse={true}>
            Mass: {item.mass}
          </S.ListDescription>
          <S.ListDescription inverse={true}>
            Gender: {item.gender}
          </S.ListDescription>
        </Modal>
      )}
    </Fragment>
  );
}

export default function PeoplePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    people,
    error,
    loading,
    getPeople,
    paginate: { total_pages, page },
  } = usePeople();

  function handleSearch(e: any) {
    if (e.key === "Enter") {
      getPeople(1, searchQuery);
    }
  }

  function handlePagination(page: number) {
    getPeople(page, searchQuery);
  }

  return (
    <Fragment>
      <S.PeopleContainer>
        <section
          className={css`
            display: flex;
            justify-content: center;
          `}
        >
          <S.PeopleHeader>Star Wars</S.PeopleHeader>
        </section>
        <S.InputContainer>
          <S.SearchInput
            type="search"
            placeholder="Search character..."
            value={searchQuery}
            onChange={(e) => {
              const VALUE = e.target.value;

              setSearchQuery(VALUE);
            }}
            onKeyPress={handleSearch}
          />
        </S.InputContainer>
        <S.Content>
          {loading ? (
            <S.ListTitle
              className={css`
                text-align: center;
              `}
            >
              Loading...
            </S.ListTitle>
          ) : people.length === 0 ? (
            <S.ListTitle
              className={css`
                text-align: center;
              `}
            >
              Nothing to show
            </S.ListTitle>
          ) : (
            <S.ListItems>
              {people.map((item) => {
                return <SinglePerson key={item.name} item={item} />;
              })}
            </S.ListItems>
          )}
          <S.PaginationContainer>
            {Array.from({ length: total_pages }, (_, i) => i + 1).map(
              (paginationButton) => {
                return (
                  <S.PaginationButton
                    onClick={() => handlePagination(paginationButton)}
                    key={paginationButton}
                    isActive={paginationButton === page}
                  >
                    {paginationButton}
                  </S.PaginationButton>
                );
              }
            )}
          </S.PaginationContainer>
        </S.Content>
      </S.PeopleContainer>
    </Fragment>
  );
}
