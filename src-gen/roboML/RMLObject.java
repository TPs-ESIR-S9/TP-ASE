/**
 */
package roboML;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.common.util.Enumerator;

/**
 * <!-- begin-user-doc -->
 * A representation of the literals of the enumeration '<em><b>RML Object</b></em>',
 * and utility methods for working with them.
 * <!-- end-user-doc -->
 * @see roboML.RoboMLPackage#getRMLObject()
 * @model
 * @generated
 */
public enum RMLObject implements Enumerator {
	/**
	 * The '<em><b>RML Int</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_INT_VALUE
	 * @generated
	 * @ordered
	 */
	RML_INT(0, "RMLInt", "RMLInt"),

	/**
	 * The '<em><b>RML String</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_STRING_VALUE
	 * @generated
	 * @ordered
	 */
	RML_STRING(1, "RMLString", "RMLString"),

	/**
	 * The '<em><b>RML Float</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_FLOAT_VALUE
	 * @generated
	 * @ordered
	 */
	RML_FLOAT(2, "RMLFloat", "RMLFloat"),

	/**
	 * The '<em><b>RML Double</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_DOUBLE_VALUE
	 * @generated
	 * @ordered
	 */
	RML_DOUBLE(3, "RMLDouble", "RMLDouble"),

	/**
	 * The '<em><b>RML Boolean</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_BOOLEAN_VALUE
	 * @generated
	 * @ordered
	 */
	RML_BOOLEAN(4, "RMLBoolean", "RMLBoolean");

	/**
	 * The '<em><b>RML Int</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_INT
	 * @model name="RMLInt"
	 * @generated
	 * @ordered
	 */
	public static final int RML_INT_VALUE = 0;

	/**
	 * The '<em><b>RML String</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_STRING
	 * @model name="RMLString"
	 * @generated
	 * @ordered
	 */
	public static final int RML_STRING_VALUE = 1;

	/**
	 * The '<em><b>RML Float</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_FLOAT
	 * @model name="RMLFloat"
	 * @generated
	 * @ordered
	 */
	public static final int RML_FLOAT_VALUE = 2;

	/**
	 * The '<em><b>RML Double</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_DOUBLE
	 * @model name="RMLDouble"
	 * @generated
	 * @ordered
	 */
	public static final int RML_DOUBLE_VALUE = 3;

	/**
	 * The '<em><b>RML Boolean</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #RML_BOOLEAN
	 * @model name="RMLBoolean"
	 * @generated
	 * @ordered
	 */
	public static final int RML_BOOLEAN_VALUE = 4;

	/**
	 * An array of all the '<em><b>RML Object</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private static final RMLObject[] VALUES_ARRAY = new RMLObject[] { RML_INT, RML_STRING, RML_FLOAT, RML_DOUBLE,
			RML_BOOLEAN, };

	/**
	 * A public read-only list of all the '<em><b>RML Object</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final List<RMLObject> VALUES = Collections.unmodifiableList(Arrays.asList(VALUES_ARRAY));

	/**
	 * Returns the '<em><b>RML Object</b></em>' literal with the specified literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param literal the literal.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static RMLObject get(String literal) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			RMLObject result = VALUES_ARRAY[i];
			if (result.toString().equals(literal)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>RML Object</b></em>' literal with the specified name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param name the name.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static RMLObject getByName(String name) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			RMLObject result = VALUES_ARRAY[i];
			if (result.getName().equals(name)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>RML Object</b></em>' literal with the specified integer value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the integer value.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static RMLObject get(int value) {
		switch (value) {
		case RML_INT_VALUE:
			return RML_INT;
		case RML_STRING_VALUE:
			return RML_STRING;
		case RML_FLOAT_VALUE:
			return RML_FLOAT;
		case RML_DOUBLE_VALUE:
			return RML_DOUBLE;
		case RML_BOOLEAN_VALUE:
			return RML_BOOLEAN;
		}
		return null;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final int value;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String name;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String literal;

	/**
	 * Only this class can construct instances.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private RMLObject(int value, String name, String literal) {
		this.value = value;
		this.name = name;
		this.literal = literal;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int getValue() {
		return value;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getLiteral() {
		return literal;
	}

	/**
	 * Returns the literal value of the enumerator, which is its string representation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		return literal;
	}

} //RMLObject
