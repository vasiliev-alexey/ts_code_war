import { assert } from 'chai';
import { calc } from './kata';

describe('Given a string', () => {
  it('will calculate the result', () => {
    assert.strictEqual(calc('ABC'), 6);
    assert.strictEqual(
      calc(
        'nrullyrbwfpcrzdmegjwgivxmkwtfjhpaoqrazwfjizurxhdwhzdjacwcghoslotvgzwuhxgsbwbugeonzzynjkexpyhnvejzrcbxjvtbbsgdehxehivewtloculjazkidyacjlxursozjclbdizpkmzvqtquegphtvtygyjnlblvqxtdbcilsayzfxkhowmcyijteqmosvpresljzecrbzwzjtbnkydpvtxhxzxisxutorfhevuwfgqbfahparmfxgbygicblvfnvvyozdqawsgrbmkcdogqyraqmxnmjezwyqiyrewqnkmgbxhfmvoqwvpehgsytuxgnsdhnldstszjxfuihuqbmsfjarqaglufawwdmbhjtpxrsdwxyihlgszjnitkfxhdamuptxulqcvylxcnssaefocclrzzygiaipkynvtenuaajlrkngpzrrjhdnphegyleymildhsfirdxqinswsretimpubxbvtdmhbnozxkxgyzrbtmvysgpactanqisqcckfxfssfrpwpzvbpdmadmxriqavfiwpmhkeepdmwrhfaxylaspwpraoufegbaflfdgoaxsgvuhcumtatnokmyianldeacbpumllhehjlqkevtnzbjoyrqookizqgtuqaoeqdkpekgxokbnhtkvgajracdkztufwbiacgoyifqsksayunbrlvbvevwzxqnnpgesvevkqtbuvrblrwwzjozanslfrspriwexrauyxsdwfsqpzqgqbsllvzbuuropbjyeegrnlghwizwklqgxkhutqpyrrdbgtrghgaxgmlemhfwfiwrdmyhupcegdbsuscezymlegzdxtxwolhjbozmawny'
      ),
      576
    );
  });
});
