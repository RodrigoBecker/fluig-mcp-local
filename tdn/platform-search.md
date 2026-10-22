---
title: "Platform ❙ Search"
url: "https://tdn.totvs.com/pages/releaseview.action?pageId=236430068"
scraped_at: "2026-03-09T05:03:32.548Z"
depth: 3
anchors: 6
child_links: 33
---

# Platform ❙ Search

# Speaking of search...

---

Search allows searching for social objects, documents, folders, binders, form records, influential people on particular subjects – Influencers –, articles, posts, and people from any page on the platform.

The feature allows customized searches based on search criteria set by the user, restricting locations, types, and time on resources searched.

Need help?

Access the help center by clicking the icon ![](/download/attachments/236430068/question-off.png?version=1&modificationDate=1596649275620&api=v2), located in the upper right corner of the pages, for specific information on this feature and links to related documentation. [Learn more.](/pages/viewpage.action?pageId=244422903)

- [Search field](#)
- [Search results](#)

![](/download/attachments/236430068/Search%20field.png?version=1&modificationDate=1764163641843&api=v2)

![](/download/attachments/236430068/Search%20results.png?version=1&modificationDate=1764163660157&api=v2)

## Perform search

---

**01.** In the main menu, click on ![](/download/attachments/236430068/%C3%ADcone-busca.png?version=1&modificationDate=1764160240470&api=v2) **Search**.

**02.** Enter the text to be searched.

A list of suggestions will appear. Users may select a word from the list or enter any other word.

Tip!

Use these [special features](#Platform❙Search-Querywildcardcharacters) for a more accurate search.

By default, the platform indexer (Solr) indexes the search by up to 15 characters. This feature was set not to take up too much disk space when indexing.

**03.** On the keyboard, press **ENTER**.

The search results screen will be displayed with the **All** tab selected by default.

## Add filter

---

**01**. Go to the search result, as displayed in the [Search](#Platform❙Search-Search) item.

**02. **In the search results displayed, click on ![](/download/attachments/236430068/filtrar.png?version=1&modificationDate=1764163210487&api=v2) **Filter**.

The filter area will be expanded and a list of filters per period will be displayed.

**03.** Select the filter to be considered.

The available filters are:

- **Search on period**The following filters can be chosen:last hour;
- last day;
- last week
- last month
- last year
- specify a start and end date.

For each filter selected, a “tag” with the selected filter is displayed above the filter, easily identifying each filter. This “tag” features a button to remove the filter, restarting the search without the filter. 

**04****.** Select the desired filters and click on **Filter**.

All search results are organized by relevance. Results may be organized by newer or older. For such, select the check box in the upper right corner of the search results screen and select an option.

## Sort search results

---

**01**. Go to the search result, as displayed in the [Search](#Platform❙Search-Search) item.

**02**. In the displayed result, sort as desired.

Available sorting options are: 

- **Sort by Relevance**: Determines that favorite documents will be displayed first;

- **Sort by Most Recent**: Determines that documents will be displayed by descending creation date, i.e., the most recently created will be shown first;

- **Sort by Oldest**: Determines that documents will be displayed by ascending creation date increasingly, i.e., the oldest will be shown first.

## Query wildcard characters

---

From this table, view wildcard characters and special terms to be used in the platform searches are listed.

| ARGUMENT | EFFECT | EXANPLE |
| --- | --- | --- |
| ARGUMENT | EFFECT | EXANPLE |
| #Hashtags | It allows the search for all contents containing the selected tag. | #healthyIt returns posts containing the tag healthy. |
| ? | It allows the search for words that have any character instead of the question mark.It cannot be used in the beginning of a term. | car?It returns card or cart. |
| * | It allows the search with parts of a word.It cannot be used in the beginning of a term. | lead*It returns leader, leadership, leaderboard. |
| ~ Closeness | It allows the search of documents that have close terms. | BACEN Interests’~5It returns all documents where the terms Interests and BACEN are until five words distant one from another. |
| ^Priority | It allows you to define the priority of a term in the search. | Interests^2 BACENFirst it returns the documents that have more references to the Interests term. |
| OR | It allows you to search in documents that have some of the specific terms. | Interests OR BACENIt returns the documents that have Interests or BACEN word. |
| AND | It allows you to search in documents that have all specific terms. | Interests AND BACENIt returns the documents that have the Interests and BACEN. |
| + | It transform a term as required in the search. | Interests + BACENIt guarantees all returned documents have the term BACEN. |
| NOT | It eliminates a term from the query. | Interests NOT BACENIt returns the documents that have the Interests term, but they do not have the BACEN term. |
| - | It eliminates a term from the query. | Interests -BACENIt returns the documents that have the Interests term, but they do not have the BACEN term. |
| ()Grouping | It allows you to group arguments. | (Interests + BACEN) OR COPONIt returns all documents that have the Interests term (optional) and BACEN or that have the COPON term. |
| “”Exact Phrase | It allows the search in documents that contain the exact phrase. | “Interests defined by Banco Central”It only returns the documents that have the exact phrase and in this sequence. |

Attention!

This documentation is valid from the **Voyager (2.0)** update onwards. If you are using a previous update, it may contain information different from what you see on your platform.


<!-- anchors: Platform❙Search-Speakingofsearch..., Search, Platform❙Search-Performsearch, Platform❙Search-Addfilter, Platform❙Search-Sortsearchresults, Platform❙Search-Querywildcardcharacters -->
