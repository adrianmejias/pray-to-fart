var walk = function(node) {
        // @url http://is.gd/mwZp7E
        var child, next;
        switch (node.nodeType) {
            case 1: // Element
            case 9: // Document
            case 11: // Document fragment
                child = node.firstChild;
                while (child) {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
            case 3: // Text node
                handleText(node);
                break;
        }
    },
    handleText = function(textNode) {
        var v = textNode.nodeValue;

        v = v.replace(/\bprays\b/g, 'farts');
        v = v.replace(/\bpray\b/g, 'fart');
        v = v.replace(/\bpraying\b/g, 'farting');
        v = v.replace(/\bprayers\b/g, 'farts');
        v = v.replace(/\bprayer\b/g, 'loud fart');

        v = v.replace(/\bPrays\b/g, 'Farts');
        v = v.replace(/\bPray\b/g, 'Fart');
        v = v.replace(/\bPraying\b/g, 'Farting');
        v = v.replace(/\bPrayers\b/g, 'Farts');
        v = v.replace(/\bPrayer\b/g, 'Loud Fart');

        textNode.nodeValue = v;
    };

walk(document.body);