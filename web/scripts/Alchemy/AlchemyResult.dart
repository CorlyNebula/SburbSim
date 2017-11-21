
import "Item.dart";
import "Trait.dart";
import "../random_tables.dart";
import "../GameEntities/player.dart";

/*
http://mspaintadventures.wikia.com/wiki/Alchemiter

Appropriately for AND combining, an && alchemy result will often demonstrate the functionality of both components
 – e.g. Dave's iShades can be a phone and a rad pair of shades – while an || alchemy result will typically have the
  functionality of only one of the components, but the form of the other – e.g. the Hammerhead Pogo Ride, which is
   just a pogo that happens to be hammer-shaped.
 */



/*
    Alchemy result takes two items and creates a third based on it's subtype.
    When you call "apply" with a item list (sylladex)
    it will remove the second item, and replace the first items traits with the third ones.

    IF IT CANNOT FIND BOTH ITEMS IN THE LIST, IT DOES NOTHING.

    The natural sorting of AlchemyResults is by the rank of the result item.

    The plan (is to give you a boner (refrance secured)) is to sort the list of alchemy results by rank.
    Then to apply them each in turn. And have the results handle if they are no longer possible since some better
    alchemization was found.

    YES I get that in canon alchemy doesn't use up the items, but I'm doing it for now as a way to keep
    inventories from getting too stupidly cluttered. Might decide that I don't need to do this later, who knows.

    Alchemy results SHOULD NOT be random.

    Alchemy results SHOULD contain a string(s) describing it's effect.

 */

abstract class AlchemyResult implements Comparable<AlchemyResult> {
    //no matter what, it's the first item that gets shit shoved into it and all other items that are removed
    //in sim, assume only two items at a time. but can support anding 3 or more things at a time
    List<Item> items;
    Item result;

    AlchemyResult(List<Item> this.items) {
        //("Combining ${turnArrayIntoHumanSentence(items)}");
        combine();
    }

    String  description(Player p, templates) {
        templates.addAll(<String>["${p.htmlTitleBasicNoTip()} uses Alchemy to combine ${turnArrayIntoHumanSentence(items)} to get ${result.fullName}. ${result.randomDescription(p.session.rand)}"]);
        return p.session.rand.pickFrom(templates);
    }

    //returns string explaining what happened when you actually did the alchemy.
    String apply(Player p, [bool applyToSpecibus = false]) {
        List<Item> targetItems = p.sylladex;
        for(Item item in items) {
            if(!targetItems.contains(item) && item != p.specibus) {
                return null;
            }
        }
        //alright, if I'm here, then I have all the parts I need for this.
        //give first item traits of result. (replace)
        Item modified;
        if(applyToSpecibus) {
            modified = p.specibus;
        }else {
            modified = targetItems[targetItems.indexOf(items[0])];
        }
        Set<ItemTrait> newTraits = result.traits.difference(modified.traits);
       // print("Adding a new descriptor. First item has ${modified.traits.length} traits, second has ${result.traits.length} traits. Difference is ${newTraits.length} big.");
        modified.traits = new Set<ItemTrait>.from(result.traits);
        result.numUpgrades ++;
        String ret = description(p, []); //don't do description earlier or later or will have wrong name.
        modified.numUpgrades ++;


        //print("result is ${result.fullName} and has ${result.traits.length} traits  and modified is ${modified.fullName} and has ${modified.traits.length} traits");

        //remove all other items.
        for(int i = 1; i<items.length; i++) {
            Item item = items[i];
            targetItems.remove(item);
        }
        return ret;
    }

    void combine();

    //alchemy results are naturally sorted by the power of the items they produce.
    @override
    int compareTo(AlchemyResult other) {
        int ret = (other.result.rank*100 - result.rank*100).round();
       // print("trying to sort ${this} against ${other}, ret is $ret. other value was ${other.result.rank}, my value was ${result.rank}  ");
        return ret; //higher numbers first
    }

    ///returns a list of all possible alchemy types between these two items.
    static List<AlchemyResult> planAlchemy(List<Item> items) {
        if(items.isEmpty) return new List<AlchemyResult>();
        if(!items.first.canUpgrade()) return new List<AlchemyResult>();
        List<AlchemyResult> ret = new List<AlchemyResult>();
        return <AlchemyResult>[new AlchemyResultAND(items), new AlchemyResultOR(items), new AlchemyResultXOR(items)];
    }
}

class AlchemyResultAND extends AlchemyResult {
  AlchemyResultAND(List<Item> items) : super(items);

  @override
  String  description(Player p, templates) {
      templates.addAll(<String>["${p.htmlTitleBasicNoTip()} overlaps the punched cards for ${turnArrayIntoHumanSentence(items)} to get ${result.fullName}. ${result.randomDescription(p.session.rand)}"]);
      return super.description(p, templates);
  }

  ///AND takes both functionality and appearance from both things.
  ///TODO if this is OP (i.e. OR is never selected) then take every other trait from both.
  @override
  void combine() {
      result = items[0].copy();
     // print("just copied the first item. result has ${result.traits.length} traits.");
      //skip first item
      for(int i = 1; i<items.length; i++) {
          Item item = items[i];
          //print("going to shove ${item.fullName} into ${result.fullName}.");
          for(ItemTrait t in item.traits) {
              //print("adding trait ${t.descriptions.first}");
            result.traits.add(t); //will handle not allowing duplicates.
          }
      }
  }

}

class AlchemyResultOR extends AlchemyResult {
    AlchemyResultOR(List<Item> items) : super(items);

    @override
    String  description(Player p, templates) {
        templates.addAll(<String>["${p.htmlTitleBasicNoTip()} carefully punches all holes from ${turnArrayIntoHumanSentence(items)} into one card to get ${result.fullName}. ${result.randomDescription(p.session.rand)}"]);
        return super.description(p, templates);
    }

    ///OR takes  functionality from first and appearance from second. ignores all other items.
    @override
    void combine() {
        result = items[0].copy();
        result.traits.clear();

        for(ItemTrait t in items[0].functionalTraits) {
            result.traits.add(t); //will handle not allowing duplicates.
        }

        for(ItemTrait t in items[1].appearanceTraits) {
            result.traits.add(t); //will handle not allowing duplicates.
        }

    }
}


//spoken only of in legend, but totally fucking theoretically possible
class AlchemyResultXOR extends AlchemyResult {
    AlchemyResultXOR(List<Item> items) : super(items);

    @override
    String  description(Player p, templates) {
        templates.addAll(<String>["Wait. What the fuck? Is this cheating? The ${p.htmlTitleBasicNoTip()} figures out how to use a XOR operation to turn ${turnArrayIntoHumanSentence(items)} into a ${result.fullName}. ${result.randomDescription(p.session.rand)}"]);
        return super.description(p, templates);
    }

    //XOR is where you have traits ONLY if they only show up in one place, not two.
    @override
    void combine() {
        result = items[0].copy();
        //all the things first item has that second doesn't
        result.traits = items[0].traits.difference(items[1].traits);
        //and vice versa
        result.traits.addAll( items[1].traits.difference(items[0].traits));
    }
}