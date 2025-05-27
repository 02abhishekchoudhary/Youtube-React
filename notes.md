# Machine coding interview

- Requirement clarification

  - Features
  - Tech stack
    - Redux
    - Tailwind CSS
    - React router DOM
    - Bundler
    - Jest, react testing library

- urlSearchParams?

# Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:

- iphone pro max = 14 letters \* 1000 = 14000
- with debouncing = 3 API calls \* 1000 = 3000

Debouncing with 200ms

- If difference between 2 key strokes is <200ms - DECLINE API CALL
- > 200ms make an API call

/\*\*

- key - i
- - render the component
- - useEffect ();
- - start the timer => make an API call after 200ms
-
- key - ip
- - destroy the component(useEffect return method)
- - re-render the component
- - useEffect ();
- - start the timer => make an API call after 200ms
-
- setTimeout(200) => make an API call after 200ms
  \*\*
  /

# Cache:

time complexity to search in array = 0(n)
time complexity to search in Object = 0(1)
[i, ip, iph, ipho, iphon, iphone]
{
i:
ip:
iph:
ipho:
iphon:
iphone:
}

- LRU Cache???
