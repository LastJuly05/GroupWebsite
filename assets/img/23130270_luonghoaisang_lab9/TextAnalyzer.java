package lab9_map;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

public class TextAnalyzer {
	// <word, its positions>
	private Map<String, ArrayList<Integer>> map = new HashMap<String, ArrayList<Integer>>();

	// load words in the text file given by fileName and store into map by using add
	// method in Task 2.1.
	// Using BufferedReader reffered in file TextFileUtils.java
	public void load(String fileName) throws IOException {
		// TODO
		BufferedReader r = new BufferedReader(new FileReader(fileName));
		int index = 1;
		while (true) {
			String line = r.readLine();
			if (line == null)
				break;
			StringTokenizer tokens = new StringTokenizer(line, " ");
			while (tokens.hasMoreTokens()) {
				String word = tokens.nextToken();
				if (!tokens.hasMoreTokens()) {
					add(word, index++);

				} else {
					add(word, -index);
				}

			}
			r.close();
			System.out.println(map);
		}
	}
	// In the following method, if the word is not in the map, then adding that word
	// to the map containing the position of the word in the file. If the word is
	// already in the map, then its word position is added to the list of word
	// positions for this word.
	// Remember to negate the word position if the word is at the end of a line in
	// the text file

	public void add(String word, int position) {
		// TODO
		// c1
		if (map.containsKey(word)) {
			map.get(word).add(position);
		} else {
			ArrayList<Integer> re = new ArrayList<Integer>();
			re.add(position);
			map.put(word, re);
		}

	}

//java8

//		ArrayList<Integer> values= map.getOrDefault(word, new ArrayList<Integer>());
//		values.add(position);
//		map.put(word, values);
//	}

	// This method should display the words of the text file along with the
	// positions of each word, one word per line, in alphabetical order
	// Display words in alphabetical order with their positions
	public void displayWords() {
	    map.keySet().stream()
	        .sorted()
	        .forEach(word -> {
	            System.out.println(word + " -> " + map.get(word));
	        });
	}

	// Display text content reconstructed from the map
	public void displayText() {
	    map.entrySet().stream()
	        .sorted(Map.Entry.comparingByValue((o1, o2) -> o1.get(0).compareTo(o2.get(0)))) // Sort by first occurrence
	        .forEach(entry -> {
	            for (Integer position : entry.getValue()) {
	                System.out.print(entry.getKey() + " ");
	            }
	        });
	    System.out.println();
	}

	// Find the most frequent word
	public String mostFrequentWord() {
	    Map<String, Integer> frequencyMap = new HashMap<>();
	    for (String word : map.keySet()) {
	        frequencyMap.put(word, map.get(word).size());
	    }
	    return frequencyMap.entrySet().stream()
	        .max(Map.Entry.comparingByValue())
	        .map(Map.Entry::getKey)
	        .orElse(null);
	}
}